$(document).ready(function () {
    function loadDataClass() {
        let html = "";
        let htmlGhiChu = "";
        fetch("./module/loadData")
            .then((response) => response.json())
            .then((result) => {
                result.forEach((item) => {
                    html += `<div>
                      <div class="heading-group d-flex align-items-center">
                          <h2 class="content-heading">${item.tennhomhocphan}</h2>
                          <div class="dropdown">
                              <button type="button" class="btn btn-sm btn-alt-secondary space-x-1 ms-2" id="dropdown-content-rich-primary" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <i class="fa fa-fw fa-pencil"></i>
                              </button>
                              <div class="dropdown-menu p-1" aria-labelledby="dropdown-content-rich-primary">
                                <div class="p-2" style="width:200px">
                                  <div class="mb-3">
                                    <label class="form-label" for="tennhomhocphan_${item.manhomhocphan}">Cập nhật nhóm</label>
                                    <input type="email" class="form-control" id="tennhomhocphan_${item.manhomhocphan}" name="tennhomhocphan_${item.manhomhocphan}" value="${item.tennhomhocphan}">
                                  </div>
                                  <button class="btn btn-sm btn-danger delete_group" onclick="deleteGroup(${item.manhomhocphan})">Xoá</button>
                                  <button class="btn btn-sm btn-primary update_group" data-id="${item.manhomhocphan}" onclick="updateGroup(${item.manhomhocphan})">Cập nhật</button>
                                </div>
                              </div>
                          </div>
                      </div>
                      <div class="row">`;
                    if (item.class.length == 0) {
                        html += `<p class="text-center">Không có lớp nào</p>`;
                    } else {
                        item.class.forEach((element) => {
                            if (element.ghichu != "") {
                                htmlGhiChu = `<p class="block-class-note">${element.ghichu}</p>`;
                            }
                            html += `
                  <div class="col-sm-6 col-lg-6 col-xl-3">
                    <!-- <a class="block block-rounded block-link-shadow" href="./module/detail/${element.manhom}"> </a> -->
                    <div class="block block-rounded">
                      <div class="block-header block-header-default">
                          <h3 class="block-title block-class-name">${element.tennhom}</h3>
                          <div class="block-options">
                            <div class="dropdown">
                              <button type="button" class="btn btn-alt-secondary dropdown-toggle module__dropdown" id="dropdown-default-light" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false" data-id="${element.manhom}">
                                <i class="si si-settings"></i>
                              </button>
                              <div class="dropdown-menu  fs-sm" aria-labelledby="dropdown-default-light" style="">
                                <a class="nav-main-link dropdown-item" href="module/detail/${element.manhom}">
                                  <i class="nav-main-link-icon si si-info me-2 text-dark"></i>
                                  <span class="nav-main-link-name fw-normal">Danh sách sinh viên</span>
                                </a>
                                <!-- Sao chep ma moi -->
                                <a class="nav-main-link dropdown-item btn-update-group" data-bs-toggle="modal" data-bs-target="#modal-update-group" href="javascript:void(0)" data-id="${element.manhom}" onclick="openModalUpdateGroup(${element.manhom})">
                                  <i class="nav-main-link-icon si si-pencil me-2 text-dark"></i>
                                  <span class="nav-main-link-name fw-normal">Sửa thông tin</span>
                                </a>
                                <a class="nav-main-link dropdown-item btn-delete-group" href="javascript:void(0)" data-id="${element.manhom}" onclick="deleteClass(${element.manhom})">
                                  <i class="nav-main-link-icon si si-trash me-2 text-danger"></i>
                                  <span class="nav-main-link-name fw-normal text-danger">Xoá nhóm</span>
                                </a>
                              </div>
                            </div>
                              <!-- <button type="button" class="btn-light btn-block-option text-dark" data-id="${element.manhom}"><i class="si si-settings"></i></button> -->
                          </div>
                      </div>
                      <div class="block-content">
                        ${htmlGhiChu}
                        <p>Sỉ số: ${element.siso}</p>
                      </div>
                    </div>
                  </div>`;
                        });
                    }
                    html += `</div></div>`;
                });
                $("#class-group").html(html);
            })
            .catch((error) => console.error(error));
    }
});
