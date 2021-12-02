<template>
  <div class="col-md-12 mt-3">
    <!-- Form Element sizes -->
    <div class="card card-secondary">
      <div class="card-header">
        <h3 class="card-title">Request for Payment</h3>

        <div class="card-tools">
          <div class="input-group input-group-sm">
            <div class="input-group-append">
              <button type="submit" class="btn btn-default">
                <!-- <i class="fas fa-file-csv"></i> -->
                <i class="fas fa-copy"></i>
              </button>
            </div>

            <div class="input-group-append">
              <button type="submit" class="btn btn-default">
                <i class="fas fa-file-csv"></i>
              </button>
            </div>

            <div class="input-group-append">
              <button type="submit" class="btn btn-default">
                <i class="fas fa-print"></i>
              </button>
            </div>

            <input
              type="text"
              name="table_search"
              class="form-control float-right"
              placeholder="Search"
            />
            <div class="input-group-append">
              <button type="submit" class="btn btn-default">
                <i class="fas fa-search"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div class="card-body p-0">
        <div class="table-responsive p-0">

           <table class="table table-sm">
            <thead>
              <tr>
              <th scope="col">Reference</th>
              <th scope="col">Request Type</th>
              <th scope="col">Request Date</th>
              <th scope="col">Client Name</th>
              <th scope="col">Project Name</th>
              <th scope="col">Payee</th>
              <th scope="col">Initiator</th>
              <th scope="col">Amount</th>
              <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>lorem</td>
                <td>Otto</td>
                <td>@mdo</td>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
              </tr>
              
            </tbody>
          </table>


        </div>
      </div>

      <div class="card-footer clearfix">
        <ul class="pagination pagination-sm m-0 float-right">
          <li class="page-item"><a class="page-link" href="#">&laquo;</a></li>
          <li class="page-item"><a class="page-link" href="#">1</a></li>
          <li class="page-item"><a class="page-link" href="#">2</a></li>
          <li class="page-item"><a class="page-link" href="#">3</a></li>
          <li class="page-item"><a class="page-link" href="#">&raquo;</a></li>
        </ul>
      </div>
    </div>
  </div>
</template>
