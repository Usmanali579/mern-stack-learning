const getData = async() => { //asyn function allow us the promise based code. It operates asynchronously with the help of event loop.
	var data = "Hello World";
	return data;
	}
	
	getData().then(data => console.log(data));

	const getData1 = async() => {
		var y = await "Hello World";
		console.log(y);
	}
	
	console.log(1);
	getData1();
	console.log(2);

  
	function asynchronous_operational_method() { //Async function implementattion
	let first_promise = new Promise((resolve, reject) => resolve("Hello"));
	let second_promise = new Promise((resolve, reject) => {
		setTimeout(() => {
		resolve(" GeeksforGeeks..");
		}, 1000);
	});
	let combined_promise = Promise.all([first_promise, second_promise]);
	return combined_promise;
	}
	
	async function display() {
	let data = await asynchronous_operational_method();
	console.log(data);
	}
	
	display();


var promise = new Promise<void>((resolve, reject) => { //Two parameters in the promise which are resolve and reject.
    const x = "Greeks for Greeks"
    const y = "Greeks for Greeks"
    if (x===y){
        resolve()
    }
    else{
        reject()
    }
});
promise.then (function(){
    console.log("Success you are greek")
}).catch(function(){
    console.log("Sorry you are not the greek")
})


    const promise1 = new Promise((resolve,reject)=>{
        setTimeout(()=>{
         resolve([46, 78, 23]);
        },5000);
    });
	let values:number
    promise1.then(values => {
        console.log(values[1]);
        });