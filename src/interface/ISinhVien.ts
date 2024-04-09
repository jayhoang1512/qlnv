import { KhoaHoc } from "../types/TKhoaHoc";

export interface ISinhVien {
  maSV: string;
  tenSV: string;
  emailSV: string;
  diemToan: number;
  diemLy: number;
  diemHoa: number;
  password: string;
  ngaySinh: Date;
  khoaHoc: KhoaHoc;
  diemTB: () => number;
}
