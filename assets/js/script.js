
class Urun{

    constructor(urunIsmi,urunStok,alisFiyat,satisFiyat,urunRaf){
        this.urunIsmi=urunIsmi;
        this.urunStok=urunStok;
        this.alisFiyat=alisFiyat;
        this.satisFiyat=satisFiyat;
        this.urunRaf=urunRaf;
    }
}



var urunListesi=[]

var box=document.getElementById("box");

let stockDurum=false;

document.getElementById("ekleButon").addEventListener("click",()=>{

    let urunIsim=document.getElementById("urunIsmi").value;
    let urunStok=parseInt(document.getElementById("urunStok").value);
    let urunAlisFiyat=document.getElementById("alisFiyat").value;
    let urunSatisFiyat=document.getElementById("satisFiyat").value;
    let urunRaf=urunSelect[0].value;

    document.getElementById("urunIsmi").value="";
    document.getElementById("urunStok").value="";
    document.getElementById("alisFiyat").value="";
    document.getElementById("satisFiyat").value="";
    //document.getElementById("urunRaf").value="";


    rafListesi.forEach((rafItem)=>{


        if(rafItem.Name==urunRaf){
            if(urunStok<=rafItem.MaxStock){

                if(!stockDurum){
                    rafItem.KalanStock=rafItem.MaxStock;
                    stockDurum=true;
                }
                
                var urunOrnek=new Urun(urunIsim,urunStok,urunAlisFiyat,urunSatisFiyat,urunRaf);

                urunListesi.push(urunOrnek);

                rafItem.KalanStock=parseInt(rafItem.KalanStock)-parseInt(urunStok);

                const urunAlSelect=document.getElementById("urunAlSelect");
                const option=document.createElement("option");
                option.textContent=urunOrnek.urunIsmi;
                option.value=urunOrnek.urunIsmi;

                urunAlSelect.appendChild(option);


            }
            else{
                alert("Rafın maksimum kapasitesitesinden daha fazla ürün girdiniz!"+
                " Rafın kalan kapasitesi: "+ rafItem.KalanStock);
            }

        }

    });


    



})

const urunler=document.getElementById("urunler");

let urunKapatButonuOlusturuldu=false;

let ackapaUrun=false;



let urunGoster=()=>{

    urunler.innerHTML="";

    ackapaUrun=!ackapaUrun;

    if(ackapaUrun ){
        document.getElementById("urun-table-block").style.display="block";
        
    }
    else{
        
        document.getElementById("urun-table-block").style.display="none";
    }

    urunListesi.forEach((item)=>{
        const tr=document.createElement("tr");

        const urunIsmiTd=document.createElement("td");
        urunIsmiTd.textContent=item.urunIsmi;

        const urunIsmiInput=document.createElement("input");
        urunIsmiInput.type="text";
        urunIsmiInput.placeholder="Ürün ad değişimi";
        urunIsmiInput.style.display="inline";
        urunIsmiInput.classList.add("ms-1");
        urunIsmiTd.appendChild(urunIsmiInput);


        const urunInputOnay=document.createElement("input");
        urunInputOnay.classList.add("ms-1");
        urunInputOnay.type="submit";
        urunInputOnay.style.display="inline";
        urunInputOnay.value="OK";

        urunInputOnay.addEventListener("click",()=>{

            item.urunIsmi=urunIsmiInput.value;
            ackapaUrun=!ackapaUrun;
            urunGoster();

        })
        urunIsmiTd.appendChild(urunInputOnay);
    
        const urunStokTd=document.createElement("td");
        urunStokTd.textContent=item.urunStok;

        const urunStokInput=document.createElement("input");
        urunStokInput.type="number";
        urunStokInput.placeholder="Ürün stok değiş";
        urunStokInput.style.display="inline";
        urunStokInput.classList.add("ms-1");
        urunStokInput.style.width="50px";
        urunStokTd.appendChild(urunStokInput);


        const urunStokInputOnay=document.createElement("input");
        urunStokInputOnay.classList.add("ms-1");
        urunStokInputOnay.type="submit";
        urunStokInputOnay.style.display="inline";
        urunStokInputOnay.value="OK";

        urunStokInputOnay.addEventListener("click",()=>{

            item.urunStok=urunStokInput.value;
            ackapaUrun=!ackapaUrun;
            urunGoster();

        })
        urunStokTd.appendChild(urunStokInputOnay);

    
        const urunAlisFiyatTd=document.createElement("td");
        urunAlisFiyatTd.textContent=item.alisFiyat;

        
        const urunAlisInput=document.createElement("input");
        urunAlisInput.type="number";
        urunAlisInput.placeholder="Ürün alış fiyat değiş";
        urunAlisInput.style.display="inline";
        urunAlisInput.classList.add("ms-1");
        urunAlisInput.style.width="50px";
        urunAlisFiyatTd.appendChild(urunAlisInput);
        

        const urunAlisInputOnay=document.createElement("input");
        urunAlisInputOnay.classList.add("ms-1");
        urunAlisInputOnay.type="submit";
        urunAlisInputOnay.style.display="inline";
        urunAlisInputOnay.value="OK";

        urunAlisInputOnay.addEventListener("click",()=>{

            item.alisFiyat=urunAlisInput.value;
            ackapaUrun=!ackapaUrun;
            urunGoster();

        })
        urunAlisFiyatTd.appendChild(urunAlisInputOnay);
    
        const urunSatisFiyatTd=document.createElement("td");
        urunSatisFiyatTd.textContent=item.satisFiyat;
    
        const urunSatisInput=document.createElement("input");
        urunSatisInput.type="number";
        urunSatisInput.placeholder="Ürün alış fiyat değiş";
        urunSatisInput.style.display="inline";
        urunSatisInput.classList.add("ms-1");
        urunSatisInput.style.width="50px";
        urunSatisFiyatTd.appendChild(urunSatisInput);


        const urunSatisInputOnay=document.createElement("input");
        urunSatisInputOnay.classList.add("ms-1");
        urunSatisInputOnay.type="submit";
        urunSatisInputOnay.style.display="inline";
        urunSatisInputOnay.value="OK";

        urunSatisInputOnay.addEventListener("click",()=>{

            item.satisFiyat=urunSatisInput.value;
            ackapaUrun=!ackapaUrun;
            urunGoster();

        })
        urunSatisFiyatTd.appendChild(urunSatisInputOnay);

        const urunRafTd=document.createElement("td");
        urunRafTd.textContent=item.urunRaf;
    
    
        tr.appendChild(urunIsmiTd);
        tr.appendChild(urunStokTd);
        tr.appendChild(urunAlisFiyatTd);
        tr.appendChild(urunSatisFiyatTd);
        tr.appendChild(urunRafTd);
    
        urunler.appendChild(tr);

        const urunKapat=document.createElement("button");

        if(!urunKapatButonuOlusturuldu){
            urunKapatButonuOlusturuldu=true;
            urunKapat.textContent="Kapat";
            urunKapat.classList.add("btn");
            urunKapat.classList.add("btn-success-outline");
            urunKapat.classList.add("f-18");
        

        document.getElementById("urun-table-block").appendChild(urunKapat);
        }

        urunKapat.addEventListener("click",()=>{
            urunKapatButonuOlusturuldu=false;
            document.getElementById("urun-table").style.display="none";
            urunKapat.style.display="none";

        });

        
        
        document.getElementById("urun-table").style.display="table";

    })
    
}

// Raf

class Raf{
    constructor(Name,MaxStock){
        this.Name=Name;
        this.MaxStock=MaxStock;
        this.KalanStock=MaxStock;
    }
}


var rafListesi=[]

const urunSelect=document.getElementsByClassName("urunSelect");


document.getElementById("rafEkle").addEventListener("click",()=>{


    let rafIsmi=document.getElementById("rafIsmi").value.toUpperCase();
    let rafMaxStok=document.getElementById("rafMaxStok").value;
    
    document.getElementById("rafIsmi").value="";
    document.getElementById("rafMaxStok").value="";

    if(rafIsmi!=""){
        var rafOrnek=new Raf(rafIsmi,rafMaxStok);

        rafListesi.push(rafOrnek);
    
        const option=document.createElement("option");
        option.textContent=rafOrnek.Name;
        option.value=rafOrnek.Name;
    
        // Her <select> öğesine kopyalanan option'u ekleyin
        for (let i = 0; i < urunSelect.length; i++) {
            const selectCopy = option.cloneNode(true);
            urunSelect[i].appendChild(selectCopy);
        }

        rafKapatButonuOlusturuldu=false;

    }

   
    
    

})

let rafKapatButonuOlusturuldu=false;


let ackapaRaf=false;



let rafGoster=()=>{

    ackapaRaf=!ackapaRaf;

    const rafBlock=document.getElementById("raf-block");
    rafBlock.innerHTML="";

    if(ackapaRaf){
        rafBlock.style.display="block";
        rafKapatButonuOlusturuldu=false;
    }
    else{
        rafBlock.style.display="none";
    }
    
    

    rafListesi.forEach((raf)=>{

        const rafTable=document.createElement("table");
        rafTable.classList.add("table-striped");
        rafTable.classList.add("mt-2");
        const thead=document.createElement("thead");

        const rafTh=document.createElement("th");
        rafTh.textContent="Raf ismi: "+raf.Name;
        const stockTh=document.createElement("th");
        stockTh.textContent="Kalan Raf Kapasitesi: "+raf.KalanStock;

        const maxStockTh=document.createElement("th");
        maxStockTh.textContent="Max Stock: "+raf.MaxStock;

        thead.appendChild(rafTh);
        thead.appendChild(stockTh);
        thead.appendChild(maxStockTh);

        const tbody=document.createElement("tbody");

        urunListesi.forEach((urunItem)=>{
            if(urunItem.urunRaf==raf.Name){
                const tr=document.createElement("tr");

                const nameTd=document.createElement("td");
                nameTd.textContent=urunItem.urunIsmi;


                const buton=document.createElement("button");
                buton.classList.add("ms-3");
                buton.textContent="Taşı";
                

                nameTd.appendChild(buton);

                const dropdown=document.createElement("div");
                
               
                
                dropdown.classList.add("mt-2");
                dropdown.style.width="34px";
                dropdown.style.marginLeft="30px";
                dropdown.style.display="flex";
                dropdown.style.flexDirection="column";
                dropdown.style.justifyContent="center";

                let ackapaButon=false;

                buton.addEventListener("click",()=>{

                    ackapaButon=!ackapaButon;

                    dropdown.innerHTML="";

                    if(ackapaButon){
                        rafListesi.forEach((rafItem)=>{
                            const rafButon=document.createElement("button");
                            rafButon.textContent=rafItem.Name;
                            rafButon.value=rafItem.Name;
                            rafButon.style.display="block";
                            rafButon.classList.add("mt-1");
    
                            rafButon.addEventListener("click",()=>{
                               
                                if(rafItem.KalanStock>=urunItem.urunStok){
                                    raf.KalanStock=parseInt(urunItem.urunStok)+parseInt(raf.KalanStock);
                                    
                                    rafItem.KalanStock=parseInt(rafItem.KalanStock-urunItem.urunStok);
                                    urunItem.urunRaf=rafItem.Name;
                                    rafBlock.innerHTML="";

                                    rafGoster();
                                }
    
                            });
    
    
                            dropdown.appendChild(rafButon);
                            
                            
                            
    
                        });
                    }
                    else{

                    }

                });

                nameTd.appendChild(dropdown);

                const stokTd=document.createElement("td");
                stokTd.textContent=urunItem.urunStok;
                stokTd.colSpan=2;

                tr.appendChild(nameTd);
                tr.appendChild(stokTd);
                tbody.appendChild(tr);
            }
            

        });

        const toplamUrunTr=document.createElement("tr");
        const toplamDegerTr=document.createElement("tr");

        const toplamUrunMesajTd=document.createElement("td");
        const toplamUrunTd=document.createElement("td");

        const toplamUrunDegerMesajTd=document.createElement("td");
        const toplamUrunDegerTd=document.createElement("td");

        let toplamUrunAdedi=0;
        let toplamUrunDegeri=0;
        
        urunListesi.forEach(function(urunItem){
            if(urunItem.urunRaf==raf.Name){
                toplamUrunAdedi=parseInt(urunItem.urunStok)+toplamUrunAdedi;
            }
            

        });

        urunListesi.forEach(function(urunItem){
            if(urunItem.urunRaf==raf.Name){
                toplamUrunDegeri=(parseInt(urunItem.satisFiyat)*parseInt(urunItem.urunStok))+toplamUrunDegeri;
            }
            

        });

        toplamUrunMesajTd.innerHTML="<strong>Raftaki Toplam Ürün</strong>";

        toplamUrunDegerMesajTd.innerHTML="<strong>Raftaki Ürünlerin Toplam Değeri (Tl)</strong>";

        toplamUrunTd.textContent=String(toplamUrunAdedi);
        toplamUrunTd.colSpan="2";

        toplamUrunDegerTd.textContent=String(toplamUrunDegeri);
        toplamUrunDegerTd.colSpan="2";



        toplamUrunTr.appendChild(toplamUrunMesajTd);
        toplamUrunTr.appendChild(toplamUrunTd);

        toplamDegerTr.appendChild(toplamUrunDegerMesajTd);
        toplamDegerTr.appendChild(toplamUrunDegerTd);

        tbody.appendChild(toplamUrunTr);
        tbody.appendChild(toplamDegerTr);

        rafTable.appendChild(thead);
        rafTable.appendChild(tbody);
        rafBlock.appendChild(rafTable);

    });

    const rafKapat=document.createElement("button");

        if(!rafKapatButonuOlusturuldu){
            
            rafKapat.textContent="Kapat";
            rafKapat.classList.add("btn");
            rafKapat.classList.add("btn-success-outline");
            rafKapat.classList.add("f-18");
            rafKapat.classList.add("mt-2");

        document.getElementById("raf-block").appendChild(rafKapat);
        }

        rafKapat.addEventListener("click",()=>{
            rafKapatButonuOlusturuldu=true;
            document.getElementById("raf-block").innerHTML="";
            

        });
        
        

}



class AlinacakUrun{

    constructor(urunIsmi,urunAdedi,urunRaf)
    {
        this.urunIsmi=urunIsmi;
        this.urunAdedi=urunAdedi;
        this.urunRaf=urunRaf;
    }

}

var alinacakUrunListesi=[]

document.getElementById("urunAl").addEventListener("click",()=>{

    let urunAlIsmi=document.getElementById("urunAlSelect").value;
    document.getElementById("urunAlSelect").value="";
   
    let urunAlisAdedi=parseInt(document.getElementById("urunAlisAdedi").value);
    document.getElementById("urunAlisAdedi").value="";

    let urunSelect1=urunSelect[1].value.toUpperCase();
    
    if(urunAlIsmi!=""){

        rafListesi.forEach((rafItem)=>{
            if(rafItem.Name==urunSelect1){
                if(rafItem.KalanStock>=urunAlisAdedi  ){
                    var urunAlOrnek=new AlinacakUrun(urunAlIsmi,urunAlisAdedi,urunSelect1);

                    alinacakUrunListesi.push(urunAlOrnek);

                }
                else{
                    alert("Rafta bulunan kapasite yeni alış siparişiniz için yeterli değildir."
                    +" Rafta kalan kapasite : "+rafItem.KalanStock);
                }
                

            }
            

        });

        

    }

   



    urunSelect[1].value="";




})





const urunlerAlBlock=document.getElementById("urunAl-table-block");

let alinanUrunButonuKapat=false;
let alinanUrunOnayButonuDurum=false;


let AlinanUrunleriGoster=()=>{



    alinanUrunOnayButonuDurum=false;

    urunlerAlBlock.innerHTML="";

    const urunlerAlTable=document.createElement("table");
    urunlerAlTable.classList.add("table-hovered-green");

    const urunlerAlThead=document.createElement("thead");
    const theadTr=document.createElement("tr");

    const theadIsimTh=document.createElement("td");
    theadIsimTh.textContent="Alınacak Ürün İsmi";
    const theadAdetTh=document.createElement("td");
    theadAdetTh.textContent="Alınacak Ürün Adedi";
    const theadAlisTh=document.createElement("td");
    theadAlisTh.textContent="Ürün Alış Fiyatı";
    const theadAyarlarTh=document.createElement("td");
    theadAyarlarTh.textContent="Ayarlar";

    theadTr.appendChild(theadIsimTh);
    theadTr.appendChild(theadAdetTh);
    theadTr.appendChild(theadAlisTh);
    theadTr.appendChild(theadAyarlarTh);

    urunlerAlThead.appendChild(theadTr);
    urunlerAlTable.appendChild(urunlerAlThead);

    const urunlerAlTbody=document.createElement("tbody");

    

    alinacakUrunListesi.forEach((item)=>{

       

        const tr=document.createElement("tr");

        const urunIsmiTd=document.createElement("td");
        urunIsmiTd.textContent=item.urunIsmi;

        const selectAl=document.createElement("select");

        selectAl.classList.add("ms-2");

        const noneOption=document.createElement("option");
        noneOption.textContent="Düzenle";
        noneOption.value="Düzenle";
        noneOption.selected;
        
        selectAl.appendChild(noneOption);

        
        const urunAdediTd=document.createElement("td");
        urunAdediTd.textContent=item.urunAdedi;
        
        

        urunListesi.forEach((urun)=>{
            const option=document.createElement("option");
            option.textContent=urun.urunIsmi;
            option.value=urun.urunIsmi;
            selectAl.appendChild(option);

        });


        selectAl.addEventListener("change",()=>{

            item.urunIsmi=selectAl.value;

            urunIsmiTd.textContent=item.urunIsmi;
            AlinanUrunleriGoster();

        });


        const inputAdet=document.createElement("input");
        inputAdet.type="number";
        inputAdet.placeholder="Adet değiştirme";
        inputAdet.style.display="inline";
        inputAdet.classList.add("ms-1");
        urunAdediTd.appendChild(inputAdet);


        const inputOnay=document.createElement("input");
        inputOnay.classList.add("ms-1");
        inputOnay.type="submit";
        inputOnay.style.display="inline";
        inputOnay.value="OK";

        inputOnay.addEventListener("click",()=>{

            item.urunAdedi=inputAdet.value;
            AlinanUrunleriGoster();

        })

        urunAdediTd.appendChild(inputOnay);

        
        

        
        urunIsmiTd.appendChild(selectAl);
        tr.appendChild(urunIsmiTd);
    
        tr.appendChild(urunAdediTd);
    

        urunListesi.forEach((urunitem)=>{
            if(urunitem.urunIsmi==item.urunIsmi)
            {
                const urunAlisFiyatTd=document.createElement("td");
                urunAlisFiyatTd.textContent=urunitem.alisFiyat;
                tr.appendChild(urunAlisFiyatTd);
                
            }
        }); 

        
        const settingsTd=document.createElement("td");

        const deleteBtn=document.createElement("button");
        deleteBtn.textContent="KALDIR";

        settingsTd.appendChild(deleteBtn);

        tr.appendChild(settingsTd);
      
        deleteBtn.addEventListener("click",()=>{

            silinecekUrunAdi=item.urunIsmi;

            alinacakUrunListesi.forEach(()=>{

                alinacakUrunListesi = alinacakUrunListesi.filter((itemAl) => itemAl.urunIsmi !== silinecekUrunAdi);
                AlinanUrunleriGoster();
            })

        });

        urunlerAlTbody.appendChild(tr);
        urunlerAlTable.appendChild(urunlerAlTbody);
        urunlerAlBlock.appendChild(urunlerAlTable);

        const urunAlButton=document.createElement("button");
        
       
        

        

        
            
            urunAlButton.textContent="Onayla";
            urunAlButton.classList.add("btn");
            urunAlButton.classList.add("btn-success-outline");
            urunAlButton.classList.add("f-18");
            urunAlButton.classList.add("mt-2");
            urunlerAlBlock.appendChild(urunAlButton);

            urunAlButton.addEventListener("click",()=>{
                alinanUrunOnayButonuDurum=true;

                urunListesi.forEach((urunItem)=>{

                    if(urunItem.urunIsmi==item.urunIsmi){
                        urunItem.urunStok=parseInt(urunItem.urunStok)+ parseInt(item.urunAdedi);
                        rafListesi.forEach((rafItem)=>{
                            if(rafItem.Name==urunItem.urunRaf){
                                rafItem.KalanStock=parseInt(rafItem.KalanStock)-parseInt(item.urunAdedi);
                            }

                        });
                        
                        urunGoster();
                        rafGoster();
                        
                        urunlerAlBlock.innerHTML="";
                        
                        alinacakUrunListesi = [];
                    }

                    

                });

            });

        
        

        const urunKapatButon=document.createElement("button");
        urunKapatButon.classList.add("mt-2");

        urunKapatButon.addEventListener("click",()=>{
           
            urunlerAlBlock.innerHTML="";
            

        });

        
        urunKapatButon.textContent="Kapat Sipariş";
        urunKapatButon.classList.add("btn");
        urunKapatButon.classList.add("btn-success-outline");
        urunKapatButon.classList.add("f-18");
        urunKapatButon.classList.add("ms-2");

           
        urunlerAlBlock.appendChild(urunKapatButon);
        

       
       

        
        
        

    })
    
   
    
    
   

    
    
}

const satisBlock=document.getElementById("satis-block");

let satisAcKapa=false;

let satisGoster=()=>{

    satisBlock.innerHTML="";
    satisAcKapa=!satisAcKapa;

    if(satisAcKapa){
        const satisTable=document.createElement("table");

    const satisThead=document.createElement("thead");
    const satisTbody=document.createElement("tbody");

    satisTable.classList.add("table-hovered-green");

    const theadTr=document.createElement("tr");
    const headNameTd=document.createElement("td");
    headNameTd.innerHTML="<strong>Ürün İsmi</strong>";
    const headStokTd=document.createElement("td");
    headStokTd.innerHTML="<strong>Ürün Stoğu</strong>";
    const headSatisAdediTd=document.createElement("td");
    headSatisAdediTd.innerHTML="<strong>Ürün Satış Adedi</strong>";
    const headSatisTd=document.createElement("td");
    headSatisTd.innerHTML="<strong>Satış Onay</strong>";

    theadTr.appendChild(headNameTd);
    theadTr.appendChild(headStokTd);
    theadTr.appendChild(headSatisAdediTd);
    theadTr.appendChild(headSatisTd);

    satisThead.appendChild(theadTr);

    urunListesi.forEach((urun)=>{

        const urunTr=document.createElement("tr");

        const urunNameTd=document.createElement("td");
        const urunStokTd=document.createElement("td");
        const urunSatisAdediTd=document.createElement("td");
        const urunSatisTd=document.createElement("td");

        const satisOnayButon=document.createElement("button");
        satisOnayButon.textContent="SAT";

        const satisAdedi=document.createElement("input");
        satisAdedi.type="Number";
        satisAdedi.placeholder="Satış adedi";

        urunNameTd.textContent=urun.urunIsmi;
        urunStokTd.textContent=urun.urunStok;
        urunSatisAdediTd.appendChild(satisAdedi);

        urunSatisTd.appendChild(satisOnayButon);
        
        urunTr.appendChild(urunNameTd);
        urunTr.appendChild(urunStokTd);
        urunTr.appendChild(urunSatisAdediTd);
        urunTr.appendChild(urunSatisTd);

        satisTbody.appendChild(urunTr);

        satisOnayButon.addEventListener("click",()=>{

            let adet=parseInt(satisAdedi.value);
            
            if(adet<=parseInt(urun.urunStok)){
                urun.urunStok=String(parseInt(urun.urunStok)-adet);
                urunGoster();
                rafGoster();
                satisBlock.innerHTML="";
            }else{
                alert("Stoktaki adetten fazla ürün satmaya çalıştınız.");
            }

            
            

        });


    });
    
    satisTable.appendChild(satisThead);
    satisTable.appendChild(satisTbody);

    satisBlock.appendChild(satisTable);

    }


    

};


