exports.run = function(inData, callback)  {
	var  rtnData = {errCode: 0};
	if (inData._loc == 'en') {
		rtnData.value = {

			list: [
			{
				slogn: 'Why coServ?',
				title: 'Page Layout',
				body: 'Page layout can be much simpler and more flexible than web themes. Try it and see how much time can be saved.'
			},
			{
				title: 'Blocks and Regions',
				body: 'Helping developers to focus on smaller areas by decomposing pages into smaller regions and blocks.'
			},
			{
				title: 'Template Engine',
				body: 'A EJS-like template to dynamically generate not just HTML, but also Javascript and CSS!'
			},
			{
				title: 'Customization',
				body: 'Developers can fully customize their web apps by writing their own node.js codes.'
			},
			{
				title: 'API Integration',
				body: 'coServ is fully intergrated with the COIMOTION API services. Developers need not to work with DB anymore.'
			},
			{
				title: 'Multi-Lingual Support',
				body: 'coServ supports language resource bundles, so multi-lingual support can be done by a single HTML file.'
			}
			]
		};
	}
	else if (inData._loc == 'zh') {
		rtnData.value = {
			list: [
			{
				slogn: 'coServ 的特色',
				title: '版型設定',
				body: '比網站樣板更強大的「頁型」系統，使前端設計更為簡便。'
			},
			{
				title: '區域/區塊',
				body: '將網頁分解成區域和區塊。設計時只需專注於小規模的區塊，coServ 會自動將網頁組合好。'
			},
			{
				title: '樣板引擎',
				body: '樣板引擎可動態產生實際的 HTML、 Javascript 與 CSS 的內容。'
			},
			{
				title: '完全客製化',
				body: '開發者可以用 node.js 的模組來建造 100% 客製化的網站或應用。'
			},
			{
				title: '整合API服務',
				body: '與先進的 COIMOTION API 服務整合，完全不用建立資料庫。'
			},
			{
				title: '支援多國語系',
				body: '利用語系資源套件來支援多國語系。支援多國語言只需單一的 HTML 原始檔。'
			}
			]
		};
	}
	callback( rtnData );
};
