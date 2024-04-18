<?php

use Spatie\Browsershot\Browsershot;

require __DIR__ . "/../vendor/autoload.php";

Browsershot::url('http://localhost/PHP-pdf/src/pdf.html')->save('../docs/document.pdf');
