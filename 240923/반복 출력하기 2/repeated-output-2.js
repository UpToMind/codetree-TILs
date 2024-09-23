function helloWorld(n) {
    if(n == 0) return;

    helloWorld(n-1);
    process.stdout.write("HelloWorld\n");
}

helloWorld(4);