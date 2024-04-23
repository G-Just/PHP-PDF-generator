<pre>
    <?php print_r($_POST); ?>
</pre>

<head>
    <link rel="stylesheet" href="style.css" />
</head>

<body class="px-20">
    <!-- Logo -->
    <div class="flex justify-end">
        <div class="flex flex-col items-center">
            <div class="overflow-hidden h-52 w-52">
                <img class="object-cover w-[300px] h-[250px]" src="<?= $_POST['company_logo'] ?>" alt="Logo" />
            </div>
            <div class="flex flex-col gap-1">
                <h1 class="w-full text-2xl font-bold text-center">
                    <?= $_POST['company_name'] ?>
                </h1>
                <p class="w-full text-left"><?= $_POST['company_address'] ?></p>
                <p class="w-full text-left"><?= $_POST['company_phone'] ?></p>
            </div>
        </div>
    </div>

    <!-- Document title -->
    <h1 class="my-8 font-thin tracking-widest text-7xl"><?= $_POST['document_title'] ?></h1>

    <!-- Info -->
    <div class="grid grid-cols-2 my-2 gap-y-4">
        <div class="flex">
            <p class="w-1/2 font-bold">Document NO:</p>
            <p class="w-1/2"><?= $_POST['document_number'] ?></p>
        </div>
        <div class="flex">
            <p class="w-1/2 font-bold">Date:</p>
            <p class="w-1/2"><?= $_POST['document_date'] ?></p>
        </div>
        <div class="flex">
            <p class="w-1/2 font-bold">Recipient:</p>
            <div class="w-1/2">
                <p>
                    <?= $_POST['document_recipient'] ?>
                </p>
            </div>
        </div>
    </div>

    <hr class="border-black" />

    <!-- Table -->
    <div>
        <table class="w-full">
            <thead class="font-bold text-center border-b border-black border-dashed">
                <td class="py-2">Item</td>
                <td class="py-2">Description</td>
                <td class="py-2">Quantity</td>
                <td class="py-2">Unit price</td>
                <td class="py-2">Total</td>
            </thead>

            <tbody class="text-center">
                <?php foreach (range(0, count($_POST['item_description']) - 1) as $i) : ?>
                    <tr>
                        <td class="py-3"><?= $i + 1 . '.' ?></td>
                        <td class="py-3"><?= $_POST['item_description'][$i] ?></td>
                        <td class="py-3"><?= $_POST['item_quantity'][$i] ?></td>
                        <td class="py-3"><?= $_POST['item_price'][$i] ?></td>
                        <td class="py-3"><?= $_POST['total_price'][$i] ?></td>
                    </tr>
                <?php endforeach ?>
            </tbody>
        </table>
    </div>

    <hr class="border-2 border-black" />

    <!-- Total -->
    <div class="flex items-center justify-end gap-4 px-2 py-4">
        <h1 class="text-xl">TOTAL:</h1>
        <p class="text-xl">$1,000.00</p>
    </div>

    <!-- Footer -->
    <div class="mt-auto">
        <h1 class="font-bold">Payment Information</h1>
        <p>
            Monopoly Bank <br />
            Account name: Trinity LLC. <br />
            Account NO: 123-456-7890
        </p>
    </div>
</body>