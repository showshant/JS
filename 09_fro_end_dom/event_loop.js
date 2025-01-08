// event loop

//main stack ra side stack or callback queue bhanni 2 ta huncha ra call back ko tasks haru main stack ma taba samma jadaina exexute huna jaba samma main stack khali (empty) hudaina i.e items of call back queue waits untill main stack is empty 

// there must me something that is checking whether main stack has become empty or not. and that something is called event loop. Event loop continuously checks the main stack and if its empty event loop places the items from call back queue to main stack
