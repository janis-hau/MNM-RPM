<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>RPM by my-new.me</title>
    <link rel="stylesheet" href="assets/css/rpm.css">
</head>

<body>
    <?php loaderRPM('RPM by <a href="https://my-new.me" target="_blank">my-new.me</a>'); ?>
</body>

</html>

<?php
function loaderRPM($loadText)
{ ?>
    <div class="rpm rpm--off">
        <div class="rpm__carbon-fiber"></div>
        <div class="rpm__dial"></div>
        <div class="rpm__marks">

            <?php
            for ($i = 0; $i <= 45; $i++) :
                // Auffüllen auf 4 Zeichen, da wir die Gesamtlänge der Zeichenkette angeben, die 4 sein soll
                $rpmValue = $i * 200; // Berechnet den RPM-Wert basierend auf dem Schleifenindex
                $strPadIndex = str_pad($rpmValue, 4, '0', STR_PAD_LEFT); // Füllt den RPM-Wert mit führenden Nullen auf

                // Prüfen, ob der Wert ein Vielfaches von 1000 ist, und nur dann Inhalt anzeigen
                $displayText = ($rpmValue % 1000 === 0) ? $rpmValue : ''; // Zeigt den Wert nur bei Vielfachen von 1000 an
                $highlighter = ($rpmValue % 1000 === 0) ? ' rpm__marker--highlight' : '';
                $borderColor = ($rpmValue >= 7000)      ? ' rpm__marker--primary' : '';

            ?>
                <div class="rpm__marker rpm__marker--<?php echo $strPadIndex;
                                                                    echo $highlighter;
                                                                    echo $borderColor ?>"><?php echo $displayText; ?></div>
            <?php endfor; ?>
        </div>
        <div class="rpm__needle-ground"></div>
        <div class="rpm__needle"></div>
        <div class="rpm__needle-base"></div>
        <div class="rpm__loadText"><?php echo $loadText ?></div>
        <div class="rpm__glass"></div>
    </div>

    <audio id="engine-sound" src="motor_engine.wav" loop></audio>

    <script><?php require_once 'assets/js/rpm.js' ?></script>

<?php
}
