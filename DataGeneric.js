class DataGeneric {
  constructor(data) {
    this.data = data;
  }

  PrintData() {
    console.log(this.data);
  }
}

// Fungsi utama
function main() {
  const nama = "Dwi Candra Pratama"; // Nama lengkap praktikan
  const nim = "2211104035"; // NIM praktikan
  const data = new DataGeneric(`${nama} dengan NIM: ${nim}`);

  data.PrintData();
}

main();
