import { ISinhVien } from "../interface/ISinhVien";
import { SinhVien } from "./SinhVien";

interface IListSinhVien {
  themSinhVien: (sinhVien: SinhVien) => void;
  suaSinhVien: (sinhVien: SinhVien) => void;
  xoaSinhVien: (id: string) => void;
  diemTB: (sinhVien: SinhVien) => number;
  getAllSinhVien: () => SinhVien[];
  layThongTinSinhVien(studentId: string): SinhVien | undefined;
  capNhatSinhVien(sinhVien: SinhVien): void;
}

export class ListSinhVien implements IListSinhVien {
  private arraySinhVien: ISinhVien[];

  constructor() {
    this.arraySinhVien = [];
  }

  getAllSinhVien: () => SinhVien[] = () => {
    return this.arraySinhVien;
  };

  diemTB: (sinhVien: SinhVien) => number = (sinhVien) => {
    const diemTB = (sinhVien.diemHoa + sinhVien.diemToan + sinhVien.diemLy) / 3;
    return diemTB;
  };

  themSinhVien: (sinhVien: SinhVien) => void = (sinhVien) => {
    // kiểm tra validation
    this.arraySinhVien.push(sinhVien);
  };

  xoaSinhVien: (id: string) => void = (id: string) => {
    let indexXoaSV = this.arraySinhVien.findIndex(
      (sinhVien) => sinhVien.maSV === id
    );
    this.arraySinhVien.splice(indexXoaSV, 1);
  };

  suaSinhVien: (sinhVien: SinhVien) => void = (sinhVien) => {
    // kiểm tra validation
    this.arraySinhVien.push(sinhVien);
  };

  layThongTinSinhVien(studentId: string): SinhVien | undefined {
    return this.arraySinhVien.find((sv) => sv.maSV === studentId);
  }

  capNhatSinhVien(updatedSinhVien: SinhVien): void {
    const index = this.arraySinhVien.findIndex(
      (sv) => sv.maSV === updatedSinhVien.maSV
    );
    if (index !== -1) {
      this.arraySinhVien[index] = updatedSinhVien;
    } else {
      console.error(`Student with ID ${updatedSinhVien.maSV} not found.`);
    }
  }
}
