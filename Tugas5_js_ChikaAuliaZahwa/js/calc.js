function hitung(){
    //tangkap id form
    var frm = document.getElementById('calcForm');
    var a1 = parseFloat(frm.angka1.value);
    var a2 = parseFloat(frm.angka2.value);

    /*  pake object "event" 
        Object event mempresentasikan element yang diklik
    */
    var tombol = event.target.value;
    if (isNaN(frm.angka1.value) || isNaN(frm.angka2.value)) {
        alert("Harap masukkan angka!!");
    }    
    else {
       switch (tombol){
        case "btn_tambah":
            total = a1 + a2;
            break;
        case "btn_kurang":
            total = a1 - a2;
            break;
        case "btn_kali":
            total = a1 * a2;
            break;
        case "btn_bagi":
            total = a1 / a2;
            break;
        case "btn_pangkat":
            total = a1 ** a2;
            break;

        default:
            break;
       }
       frm.hasil.value = total;
    }
    
    
}
