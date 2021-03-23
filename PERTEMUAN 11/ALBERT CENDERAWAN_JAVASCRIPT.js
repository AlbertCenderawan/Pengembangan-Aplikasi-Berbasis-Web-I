class Mahasiswa
{
    constructor(NIM, nama, jurusan)
    {
        this.NIM = NIM;
        this.nama = nama;
        this.jurusan = jurusan;
    }

    showInformasiMahasiswa()
    {
        document.write("NIM Mahasiswa : " + this.NIM);
        document.write("<br>");
        document.write("Nama Mahasiswa: " + this.nama);
        document.write("<br>");
        document.write("Jurusan : " + this.jurusan);
        document.write("<br>");
        document.writeln("=============================");
    }

    getNIM()
    {
        return "Halo, NIM saya adalah: " + this.NIM;
    }
}

class Dosen
{
    constructor(NID, nama, status, nomorHP, alamat)
    {
        this.NID = NID;
        this.nama = nama;
        this.status = status;
        this.nomorHP = nomorHP;
        this.alamat = alamat;
    }

    hasilTugas(nilai)
    {
        if (nilai == 100) return "Lulus";
        else if (nilai == 50) return "Remed";
    }

    menilaiTugas(tugasSiswa)
    {
        if (tugasSiswa == null)
        {
            nilaiMahasiswa = 50;
            document.writeln("Nilai mahasiswa: " + this.hasilTugas(nilaiMahasiswa));
            document.writeln("Beri hukuman ke murid");
        }
        else
        {
            nilaiMahasiswa = 100;
            document.writeln("Nilai mahasiswa: " + this.hasilTugas(nilaiMahasiswa));
        }
    }
    
    tampilkanInfoDosen()
    {
        document.writeln("Nomor Induk Dosen: " + this.NID);
        document.writeln("Nama Dosen: " + this.nama);
        document.writeln("Status: " + this.status);
        document.writeln("Nomor HP: " + this.nomorHP);
        document.writeln("Alamat: " + this.alamat);
    }

    memberiAbsensi(statusPresensi)
    {
        if (statusPresensi == true) document.writeln("Presensi sudah lengkap \n");
        else document.writeln("Ada murid yang tidak hadir \n");
    }
}