import { portfolioList } from "../data/data";


(function(){
    console.log(portfolioList);
})();

function renderList(listData) {
    var pofolList = document.getElementById("pofollist");

    var htmls = listData.map((item)=>{
        var title = item['title'];
        var subTitle = item['subTitle'];
        var mainImg = item['mainImg'];
        return`
        <article class="">
			<span class="image">
				<img src="${mainImg}" alt="" />
			</span>
			<a href="generic.html">
				<h2>${title}</h2>
				<div class="content">
					<p>${subTitle}</p>
				</div>
			</a>
		 </article>
        `;

    });
    
    pofolList,innerHTML = htmls.join("");
}