<template>
          <aside>
          <div class="row mt-4">
            <div class="col-md-3">
                  <div class="form-group">
                    <small><label for="reference">Reference Number</label></small>
                    <input type="text" class="form-control form-control-sm" id="reference">
                  </div>
            </div>
            <div class="col-md-3">
                  <div class="form-group">
                    <small><label for="requestDate">Request Date</label></small>
                    <input type="date" class="form-control form-control-sm" id="requestDate">
                  </div>
            </div>
            

            <div class="col-md-3">
                  <div class="form-group">
                    <small><label for="dateNeeded">Date Needed</label></small>
                    <input type="date" class="form-control form-control-sm" id="dateNeeded">
                  </div>
            </div>
            <div class="col-md-3">
                  <div class="form-group">
                    <small><label for="reportingManager selextForm" id="selextForm">Reporting Manager</label></small>
                    <input type="text" class="form-control form-control-sm" id="reportingManager">
                  </div>

            </div>
          </div>

          <div class="row">
            <div class="col-md-6">
                 <div class="form-group">
                    <small><label for="projectName">Project Name</label></small>
                    <input type="text" class="form-control form-control-sm" id="projectName">
                  </div>
            </div>
            <div class="col-md-6">
                 <div class="form-group">
                    <small><label for="clientName">Client Name</label></small>
                    <input type="text" class="form-control form-control-sm" id="clientName">
                  </div>
            </div>
          </div>

          <div class="row">
            <div class="col-md-12">
              <div class="form-group">
                <small><label for="purpose">Purpose</label></small>
              <textarea class="form-control" name="purpose" id="purpose"  rows="5"></textarea>
              </div>
            </div>
          </div>


        </aside>
        <!-- /.card-body -->
</template>

