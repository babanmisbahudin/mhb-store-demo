// Hanya untuk halaman admin.
// ===== Data contoh admin. Semua angka dasbor & laporan dihitung dari sini.
const O=[
 {no:'TK-9C2LD4',b:'court-biru',s:'Dibayar',ke:'Coblong, Bandung',k:'J&T EZ',o:14000,n:14000,t:'23 Nov, 14.02',m:'QRIS',p:'Contoh Delapan'},
 {no:'TK-1H6WN8',b:'lari-hitam',s:'Dibayar',ke:'Tebet, Jakarta',k:'JNE REG',o:15000,n:15000,t:'23 Nov, 11.40',m:'QRIS',p:'Contoh Sembilan'},
 {no:'TK-2V5BE1',b:'lari-mint',s:'Menunggu',ke:'Cigasong, Majalengka',k:'JNE REG',o:15000,n:0,t:'23 Nov, 14.35',m:'VA BCA',p:'Contoh Sepuluh'},
 {no:'TK-5D3XU7',b:'court-toska',s:'Dikemas',ke:'Coblong, Bandung',k:'SiCepat BEST',o:22000,n:22000,t:'22 Nov, 19.10',m:'GoPay',p:'Contoh Sebelas'},
 {no:'TK-7K3QX9',b:'court-bata',s:'Dikirim',ke:'Coblong, Bandung',k:'J&T EZ',o:14000,n:28000,t:'21 Nov, 10.12',m:'QRIS',p:'Contoh Dua Belas',ms:'Tertahan 2 hari'},
 {no:'TK-6F9PA2',b:'tinggi-biru',s:'Dikirim',ke:'Tebet, Jakarta',k:'JNE REG',o:30000,n:30000,t:'21 Nov, 08.31',m:'QRIS',p:'Contoh Tiga Belas'},
 {no:'TK-8S0YA3',b:'lari-merah',s:'Selesai',ke:'Tebet, Jakarta',k:'SiCepat BEST',o:22000,n:22000,t:'17 Nov, 13.20',m:'QRIS',p:'Contoh Tujuh'},
 {no:'TK-3J7VE5',b:'slip-abu',s:'Selesai',ke:'Cigasong, Majalengka',k:'JNE REG',o:15000,n:15000,t:'18 Nov, 09.05',m:'QRIS',p:'Contoh Dua Empat'},
 {no:'TK-4M8RZ2',b:'lari-merah',s:'Bermasalah',ke:'Cigasong, Majalengka',k:'J&T EZ',o:14000,n:0,t:'17 Nov, 14.55',m:'VA BRI',p:'Contoh Empat Belas',ms:'Uang masuk setelah waktu habis, sepatu sudah terjual'}];
// nama, ukuran, model, harga maks, asal, status, izin kabar, izin promo, terakhir
const NM={rendah:'Low',tinggi:'High',selip:'Slip-on',lari:'Lari'},LEADS=[['Contoh Satu',42,'rendah',300000,'Kabari saya','Lead baru',1,0,'Hari ini'],['Contoh Dua',43,'lari',400000,'Kabari saya','Lead baru',1,1,'Hari ini'],['Contoh Tiga',41,'lari',250000,'Kabari saya','Lead baru',1,0,'Kemarin'],['Contoh Empat',41,'rendah',300000,'Kabari saya','Lead baru',1,0,'Kemarin'],['Contoh Lima',40,'tinggi',0,'Checkout belum dibayar','Lead baru',0,0,'2 hari lalu'],['Contoh Enam',42,'lari',0,'Kabari kalau batal','Dihubungi',0,0,'2 hari lalu'],['Contoh Tujuh',40,'lari',0,'Beli di web','Pembeli',0,0,'6 hari lalu'],
 ['Contoh Lima Belas',42,'tinggi',150000,'Kabari saya','Lead baru',1,0,'2 hari lalu'],['Contoh Enam Belas',42,'lari',300000,'Kabari saya','Lead baru',1,0,'3 hari lalu'],['Contoh Tujuh Belas',43,'rendah',300000,'Kabari saya','Lead baru',1,1,'3 hari lalu'],['Contoh Delapan Belas',42,'selip',150000,'Kabari saya','Lead baru',1,0,'4 hari lalu'],['Contoh Sembilan Belas',43,'tinggi',300000,'Kabari saya','Lead baru',1,0,'4 hari lalu'],['Contoh Dua Puluh',41,'tinggi',200000,'Kabari saya','Lead baru',1,0,'5 hari lalu'],['Contoh Dua Satu',44,'rendah',120000,'Kabari saya','Lead baru',1,0,'5 hari lalu'],['Contoh Dua Tiga',44,'lari',0,'Beli di web','Pembeli',1,1,'30 hari lalu'],['Contoh Dua Empat',43,'selip',0,'Beli di web','Pembeli',0,0,'6 hari lalu'],['Contoh Dua Dua',40,'lari',200000,'Kabari saya','Lead baru',1,0,'6 hari lalu']];
const cocok=x=>x[4]==='Kabari saya'?B.filter(b=>!b.laku&&!(b.tahan>0)&&b.u===x[1]&&b.t===x[2]&&b.h<=x[3]):[];
const tot=o=>brg(o.b).h+o.o;
// follow up: jd = hari lagi (0 = hari ini), pr = izin promo
const ALASAN={cocok:'Sepatu yang dicari sudah ada',checkout:'Checkout belum dibayar',sampai:'Paket sampai 3 hari lalu',lama:'Pembeli lama, setuju promo',batal:'Menunggu sepatu batal dibayar'};
const FU=[{n:'Contoh Lima',j:'checkout',b:'tinggi-abu',jd:0,pr:0,r:[['22 Nov','Membuat pesanan, belum membayar'],['22 Nov','Email otomatis: pengingat bayar']],c:''},
 {n:'Contoh Satu',j:'cocok',b:'court-navy',jd:0,pr:0,r:[['23 Nov','Mengisi Kabari saya: Low EU 42, sampai Rp300.000']],c:''},
 {n:'Contoh Dua',j:'cocok',b:'lari-navy',jd:0,pr:1,r:[['23 Nov','Mengisi Kabari saya: Lari EU 43, sampai Rp400.000']],c:''},
 {n:'Contoh Dua Empat',j:'sampai',b:'slip-abu',jd:0,pr:0,r:[['18 Nov','Membeli Slip-on Abu'],['21 Nov','Paket sampai']],c:''},
 {n:'Contoh Empat',j:'cocok',b:'suede-marun',jd:1,pr:0,r:[['22 Nov','Mengisi Kabari saya: Low EU 41, sampai Rp300.000'],['23 Nov','Dihubungi, minta dikabari lagi setelah gajian']],c:'Minta dihubungi lagi tanggal 25.'},
 {n:'Contoh Dua Tiga',j:'lama',b:'lari-abu',jd:3,pr:1,r:[['25 Okt','Membeli di web'],['25 Okt','Setuju menerima promo']],c:''},
 {n:'Contoh Enam',j:'batal',b:'lari-mint',jd:2,pr:0,r:[['22 Nov','Minta dikabari kalau batal dibayar']],c:'Hubungi hanya bila sepatunya kembali tayang.'}];
const HASIL=['Membeli','Tidak lanjut','Membeli','Dijadwalkan lagi','Tidak lanjut','Membeli','Dijadwalkan lagi','Tidak lanjut','Membeli','Tidak lanjut','Tidak lanjut'];
const MENU=[['admin','Dasbor'],['admin-pesanan','Pesanan',O.filter(o=>o.s==='Dibayar').length],['admin-kirim','Pengiriman',O.filter(o=>o.s==='Dikemas').length],['admin-barang','Barang',[...B,...ARSIP].filter(b=>b.sp==='matikan').length],['admin-distributor','Distributor'],['admin-pelanggan','Pelanggan'],['admin-followup','Follow up',FU.filter(f=>f.jd===0).length],['admin-promo','Promo'],['admin-retur','Retur',1],['admin-laporan','Laporan'],['admin-atur','Pengaturan']];
const WEB=[0,1,0,2,1,0,1,3,1,0,2,1,1,0,2,1,0,1,2,0,1,2,1,0,1,3,1,0,2,2],SHP=[1,0,1,0,0,2,1,0,1,0,0,1,0,2,0,0,1,1,0,0,1,0,1,0,0,1,1,0,1,0],HG=[291,385,165,295,340,210,320,135,230,365];
const HM=[175,240,135,190,215,130,200,80,160,225];
const JUAL=(()=>{let k=0;const ambil=(n,sp)=>{let s=0,m=0;for(let i=0;i<n;i++){const q=k++%HG.length,p=HG[q]*1000;s+=sp?naikSp(p):p;m+=HM[q]*1000}return[s,m]};return WEB.map((w,i)=>{const d=new Date(2026,9,25+i),[rw,mw]=ambil(w),[rs,ms]=ambil(SHP[i],1);return{d,w,s:SHP[i],rw,rs,m:mw+ms}})})();
const tgl=d=>d.toLocaleDateString('id-ID',{day:'numeric',month:'short'}),jum=(a,f)=>a.reduce((x,y)=>x+f(y),0),rb=n=>n>=1e6?'Rp'+(n/1e6).toLocaleString('id-ID',{maximumFractionDigits:1})+' jt':n>=1e3?'Rp'+Math.round(n/1e3)+' rb':'Rp'+n;
const WRN={Dibayar:'awas',Selesai:'ok',Bermasalah:'buruk'};

// ===== RAHASIA TOKO: modal & distributor. Hanya dimuat halaman admin; di produksi tidak pernah dikirim API toko.
const BIAYA={kemas:3000,qris:.007,shopee:.08};
const DIST=[{id:'d1',n:'Distributor Contoh A',kota:'Bandung',j:'Preloved lokal',kt:'Contoh Andi',st:1,c:'Biasanya kirim hari Senin.'},{id:'d2',n:'Titipan Contoh B',kota:'Majalengka',j:'Titip jual',kt:'Contoh Beni',st:1,c:'Dibayar setelah laku.'},{id:'d3',n:'Toko Contoh C',kota:'Cirebon',j:'Sisa stok toko',kt:'Contoh Cici',st:1,c:'Ada nota pembelian.'},{id:'d4',n:'Pengumpul Contoh D',kota:'Jakarta',j:'Belum jelas',kt:'Contoh Dedi',st:1,c:'Asal barang belum dijelaskan.'}];
const ASAL=['Preloved lokal','Titip jual','Sisa stok toko','Belum jelas'];
Object.entries({'court-navy':[165,10,'d1'],'kanvas-tinggi':[300,15,'d3'],'slip-kotak':[45,5,'d1'],'lari-mint':[230,10,'d1'],'suede-marun':[170,20,'d2'],'lari-abu':[205,10,'d3'],'tinggi-krem':[110,25,'d4'],'court-putih':[180,10,'d3'],'lari-merah':[130,15,'d1'],'selip-hijau':[65,5,'d1'],'court-hijau':[120,10,'d2'],'lari-navy':[215,10,'d3'],'tinggi-merah':[160,15,'d4'],'slip-biru':[75,5,'d1'],'court-pasir':[80,18,'d4'],'lari-kuning':[150,10,'d2'],'tinggi-abu':[190,10,'d3'],'court-biru':[160,10,'d1'],'lari-hitam':[200,10,'d3'],'court-toska':[125,10,'d1'],'court-bata':[165,20,'d2'],'slip-abu':[70,5,'d1'],'tinggi-biru':[185,10,'d3']}).forEach(([i,[h,r,d]])=>{const b=brg(i);b.hpp=h*1000;b.rep=r*1000;b.d=d});
const SEMUA=()=>[...B,...ARSIP],modal=b=>b.hpp+b.rep,uWeb=(b,h=b.h)=>h-modal(b)-BIAYA.kemas-Math.round(h*BIAYA.qris),uSp=b=>b.hs?b.hs-modal(b)-BIAYA.kemas-Math.round(b.hs*BIAYA.shopee):null,uHari=x=>x.rw+x.rs-x.m-BIAYA.kemas*(x.w+x.s)-Math.round(x.rw*BIAYA.qris)-Math.round(x.rs*BIAYA.shopee);
const ung=n=>`<span class="ung ${n<0?'rugi':n<15000?'tipis':''}">${n<0?'Rugi '+rp(-n):'Untung '+rp(n)}</span>`;
const BELI=[{d:'d1',t:'20 Nov',p:9,s:1,tot:900000,ok:40000},{d:'d3',t:'12 Nov',p:6,s:0,tot:1275000,ok:30000},{d:'d4',t:'2 Nov',p:5,s:2,tot:330000,ok:20000},{d:'d1',t:'28 Okt',p:7,s:1,tot:690000,ok:35000}];
// uang toko yang tertahan: barang titipan belum dibayar, jadi hanya biaya perbaikannya
const titip=b=>DIST.find(d=>d.id===b.d)?.j==='Titip jual',mRak=b=>titip(b)?b.rep:modal(b);
