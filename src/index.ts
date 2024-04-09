import { ListSinhVien } from "./models/ListSinhVien.js";
import { SinhVien } from "./models/SinhVien.js";
import { KhoaHoc } from "./types/TKhoaHoc.js";

// import { useState } from "react";
// import { useLocalStorage } from "./models/localStorage.js";
function resetSV() {
  let formElement = document.getElementById("formQLSV") as HTMLFormElement;
  formElement.reset();
}

document.querySelector("#rsSV")?.addEventListener("click", resetSV);

let arrID = [
  "txtMaSV",
  "txtTenSV",
  "txtEmail",
  "txtDiemToan",
  "txtDiemLy",
  "txtDiemHoa",
  "txtPass",
  "txtNgaySinh",
  "khSV",
];
let listSinhVien = new ListSinhVien();
let themSinhVien = () => {
  let maSV = (<HTMLInputElement>document.getElementById(arrID[0])).value;
  let tenSV = (<HTMLInputElement>document.getElementById(arrID[1])).value;
  let emailSV = (<HTMLInputElement>document.getElementById(arrID[2])).value;
  let diemToan = Number(
    (<HTMLInputElement>document.getElementById(arrID[3])).value
  );
  let diemLy = Number(
    (<HTMLInputElement>document.getElementById(arrID[4])).value
  );
  let diemHoa = Number(
    (<HTMLInputElement>document.getElementById(arrID[5])).value
  );
  let password = (<HTMLInputElement>document.getElementById(arrID[6])).value;
  let ngaySinh = new Date(
    (<HTMLInputElement>document.getElementById(arrID[7])).value
  );
  let khoaHoc = (<HTMLInputElement>document.getElementById(arrID[8]))
    .value as KhoaHoc;

  let sinhVien = new SinhVien(
    maSV,
    tenSV,
    emailSV,
    diemToan,
    diemLy,
    diemHoa,
    password,
    ngaySinh,
    khoaHoc
  );

  listSinhVien.themSinhVien(sinhVien);

  showThongTinSinhVien();
  resetSV();
  // console.log(listSinhVien.getAllSinhVien());
};

document.querySelector("#btnThem")?.addEventListener("click", themSinhVien);

let showThongTinSinhVien = () => {
  let contentHTML = "";
  // duyệt toàn bộ sinh viên
  let arraySinhVien = listSinhVien.getAllSinhVien();
  for (let index = 0; index < arraySinhVien.length; index++) {
    const sinhVien = arraySinhVien[index];
    contentHTML += `
    <tr>
    <td>${sinhVien.maSV}</td>
    <td>${sinhVien.tenSV}</td>
    <td>${sinhVien.emailSV}</td>
    <td>${sinhVien.ngaySinh.toLocaleDateString()}</td>
    <td>${sinhVien.khoaHoc}</td>
    <td>${sinhVien.diemTB().toFixed(2)}</td>
    <td size="lg">
    <button type="button" class="btn btn-warning edit-btn" data-id="${
      sinhVien.maSV
    }">Edit</button>
    <button type="button" class="btn btn-primary">View</button>
    <button type="button" class="btn btn-danger delete-btn" data-id="${
      sinhVien.maSV
    }">Delete</button>
    </td>
    </tr>`;
  }
  let myContainer = document.getElementById(
    "tbodySinhVien"
  ) as HTMLTableRowElement;

  myContainer.innerHTML = contentHTML;

  let deleteButtons = document.querySelectorAll(".delete-btn");
  deleteButtons.forEach((button) => {
    button.addEventListener("click", () => {
      // Extract the student ID from the data-id attribute and call deleteStudent function
      let studentId = String(button.getAttribute("data-id"));
      deleteStudent(studentId);
    });
  });

  // let editButtons = document.querySelectorAll(".edit-btn");
  // editButtons.forEach((button) => {
  //   button.addEventListener("click", () => {
  //     // Extract the student ID from the data-id attribute and call editStudent function
  //     let studentId = String(button.getAttribute("data-id"));
  //     if (studentId) {
  //       editStudent(studentId);
  //     }
  //   });
  // });
};

let deleteStudent = (id: string) => {
  listSinhVien.xoaSinhVien(id);
  showThongTinSinhVien();
};

// let editStudent = (studentId: string) => {
//   let studentToEdit = listSinhVien.layThongTinSinhVien(studentId); // Retrieve student details
//   if (studentToEdit) {
//     // If student exists
//     // Populate form fields with existing values
//     (<HTMLInputElement>document.getElementById("txtMaSV")).value =
//       studentToEdit.maSV;
//     (<HTMLInputElement>document.getElementById("txtTenSV")).value =
//       studentToEdit.tenSV;
//     // Populate other fields similarly

//     // Optionally, disable fields that should not be edited

//     // Handle form submission to save changes
//     document.querySelector("#btnCapNhat")?.addEventListener("click", () => {
//       // Retrieve updated values from form fields
//       let updatedMaSV = (<HTMLInputElement>document.getElementById("txtMaSV"))
//         .value;
//       let updatedTenSV = (<HTMLInputElement>document.getElementById("txtTenSV"))
//         .value;
//       // Retrieve other updated fields similarly

//       // Update the student object with new values
//       studentToEdit.maSV = updatedMaSV;
//       studentToEdit.tenSV = updatedTenSV;
//       // Update other fields similarly

//       // Save changes (update the student in the list)
//       listSinhVien.capNhatSinhVien(studentToEdit); // You need to implement this method in ListSinhVien

//       // Refresh the display
//       showThongTinSinhVien();
//     });
//   }
// };
