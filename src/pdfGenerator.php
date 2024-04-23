<?php

use Spatie\Browsershot\Browsershot;

require __DIR__ . "/../vendor/autoload.php";

function generate()
{
    Browsershot::url('http://localhost/PHP-pdf/src/pdfAssembler.php')->save('../docs/document.pdf');
}
