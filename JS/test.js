var btn = document.getElementById('btn');
var tab = document.getElementById('tab');



var tabImg = ['http://www.chemises-discount.fr/template/images/dechirer-carre.png', 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQRDkw-EbGj1BfyF3W6lfORRLzNm_moPaetN_QLy-r33yHBXsz-Ew', 'http://www.forme-sante-ideale.com/wp-content/uploads/2012/02/69197689_p.gif', 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQIdjHitDXDEnbH3dmKlJn75pETxTGZHdL4fmT2gw1oPAzCruxA'];

function suppr () {

tabImg.length -= 1;
tab.innerHTML = "";
for (i = 0; i < tabImg.length; i++) {
  tab.innerHTML += "<img src='" + tabImg[i] + "'>";
}
}

for (i = 0; i < tabImg.length; i++) {
  tab.innerHTML += "<img src='" + tabImg[i] + "'>";
}


btn.onclick = suppr;
