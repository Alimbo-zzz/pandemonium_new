function login_game(){
	const login_btn = document.querySelector('#login-btn');

	login_btn.onclick = ()=>{
		console.log('login');
		login()
			.then(wax=>{
				console.log(wax);
				// let body = {
				// 	name: 'hpd34.wam',
				// 	collection_name: 'farmingtales'
				// }
				let body = {
					waxName: `${wax[0]}`,
					collection_name: `${wax[1]}`
				}

				console.log(body);
				sendRequest('POST', '/login', body)
				// sendRequest('POST', 'https://wax.api.atomicassets.io/atomicassets/v1/assets', body)
				// 	.then(data=>{
				// 		console.log(data);
				// 	})
			})
	}


}

login_game();


const wax = new waxjs.WaxJS({
		rpcEndpoint: 'https://wax.greymass.com'
});
//automatically check for credentials
// autoLogin();

//checks if autologin is available
async function autoLogin() {
		let isAutoLoginAvailable = await wax.isAutoLoginAvailable();
		if (isAutoLoginAvailable) {
				let userAccount = wax.userAccount;
				let pubKeys = wax.pubKeys;

				console.log(pubKeys, userAccount);
				// let str = 'AutoLogin enabled for account: ' + userAccount + '<br/>Active: ' + pubKeys[0] + '<br/>Owner: ' + pubKeys[1]
				// document.getElementById('autologin').insertAdjacentHTML('beforeend', str);
		}
		else {
				// document.getElementById('autologin').insertAdjacentHTML('beforeend', 'Not auto-logged in');
		}
}

//normal login. Triggers a popup for non-whitelisted dapps
async function login() {
	try {
			//if autologged in, this simply returns the userAccount w/no popup

			let userAccount = await wax.login();
			let pubKeys = wax.pubKeys;
			console.log(userAccount);
			return [userAccount, pubKeys];

			// let str = 'Account: ' + userAccount + '<br/>Active: ' + pubKeys[0] + '<br/>Owner: ' + pubKeys[1]
			// document.getElementById('loginresponse').insertAdjacentHTML('beforeend', str);
	} catch (e) {
			// document.getElementById('loginresponse').append(e.message);
	}

}

async function sign() {
if(!wax.api) {
		console.log('aaaaaa');
		// return document.getElementById('response').append('* Login first *');
}

try {
		const result = await wax.api.transact({
		actions: [{
				account: 'eosio',
				name: 'delegatebw',
				authorization: [{
				actor: wax.userAccount,
				permission: 'active',
				}],
				data: {
				from: wax.userAccount,
				receiver: wax.userAccount,
				stake_net_quantity: '0.00000001 WAX',
				stake_cpu_quantity: '0.00000000 WAX',
				transfer: false,
				memo: 'This is a WaxJS/Cloud Wallet Demo.'
				},
		}]
		}, {
		blocksBehind: 3,
		expireSeconds: 30
		});
		console.log(result);
		// document.getElementById('response').append(JSON.stringify(result, null, 2))
} catch(e) {
	console.log(e);
		// document.getElementById('response').append(e.message);
}
}
