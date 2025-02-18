document.addEventListener("DOMContentLoaded", function () {
    let rpm = 0;
    let isAccelerating = false;
    let idleTimeout = null;
    const needle = document.querySelector(".rpm__needle");
    const tachometer = document.querySelector(".rpm");
    const engineSound = document.getElementById("engine-sound");

    function updateRPM() {
        if (isAccelerating) {
            rpm = Math.min(rpm * 1.02 + 50, 9000); // Exponential acceleration growth
            clearTimeout(idleTimeout); // Cancel idle timeout if running
        } else {
            rpm = Math.max(rpm * 0.95 - 30, 0); // Slow deceleration
        }

        let rotation = ((rpm / 9000) * 240) - 124; // Correctly limited rotation range
        let jitter = rpm >= 6500 ? (Math.random() * (rpm >= 7500 ? 10 : 4) - (rpm >= 7500 ? 5 : 2)) : 0;
        needle.style.transform = `translate(-50%, -100%) rotate(${rotation + jitter}deg)`;

        // 🛠 Tachometer shaking effect
        let shakeIntensity = 0;
        if (rotation >= -120) shakeIntensity = 1;
        if (rotation >= -40) shakeIntensity = 3;
        if (rotation >= 0) shakeIntensity = 5;
        if (rotation >= 45) shakeIntensity = 10;
        if (rotation >= 100) shakeIntensity = 12;
        if (rotation >= 110) shakeIntensity = 18;
        tachometer.style.transform = `translate(${Math.random() * shakeIntensity - shakeIntensity / 2}px, ${Math.random() * shakeIntensity - shakeIntensity / 2}px)`;

        // 🎵 Engine sound volume & speed adjustment
        let soundVolume = Math.min(0.2 + (rpm / 9000) * 0.8, 1);
        let soundSpeed = 0.8 + (rpm / 9000) * 2; // Adjusted for smoother transition
        engineSound.volume = soundVolume;
        engineSound.playbackRate = soundSpeed;

        // 🔇 If RPM stays at 0 for 3 seconds, mute sound & dim tachometer
        if (rpm < 300 && !isAccelerating) {
            if (!idleTimeout) {
                idleTimeout = setTimeout(() => {
                    engineSound.pause(); // 🚀 **Stops the sound completely!**
                    engineSound.currentTime = 0; // **Resets sound position**
                    tachometer.style.transform = "translate(0, 0)"; // Stop shaking
                    tachometer.classList.add('rpm--off');
                }, 1000);
            }
        } else {
            tachometer.style.filter = "none"; // Remove grayscale filter
            tachometer.classList.remove('rpm--off');
        }

        // 🔁 Fix for looping audio: Reset to prevent a small gap
        if (engineSound.currentTime > engineSound.duration - 0.1) {
            engineSound.currentTime = 0.2;
        }

        requestAnimationFrame(updateRPM);
    }

    document.addEventListener("keydown", function (event) {
        if (event.key === "ArrowUp" || event.key.toLowerCase() === "w") {
            if (engineSound.paused) {
                engineSound.play(); // Only start sound ONCE
            }
            isAccelerating = true;
            clearTimeout(idleTimeout); // Cancel idle timeout if accelerating
            idleTimeout = null;
        }
    });

    document.addEventListener("keyup", function (event) {
        if (event.key === "ArrowUp" || event.key.toLowerCase() === "w") {
            isAccelerating = false;
        }
    });

    updateRPM();
});
