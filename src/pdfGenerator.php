<?php

// TODO: Make the index.html thing a form so it can get processed by this php file

use Spatie\Browsershot\Browsershot;

require __DIR__ . "/../vendor/autoload.php";

Browsershot::url('http://localhost/PHP-pdf/src/pdf.html')->save('../docs/document.pdf');

?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>PDF</title>
</head>

<body style="height: 100vh; margin: 0; padding: 0; overflow: hidden;">
    <iframe src="../docs/document.pdf" style="width: 100%;height: 100%;border: none;"></iframe>
</body>

</html>