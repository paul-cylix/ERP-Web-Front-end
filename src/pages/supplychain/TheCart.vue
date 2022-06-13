<template>
  <body class="hold-transition sidebar-collapse layout-top-nav layout-fixed layout-navbar-fixed">
    <div class="wrapper">
      <!-- Top Navbar -->
      <nav
        class="main-header navbar navbar-expand-md navbar-light navbar-white"
      >
        <div class="container">

          <router-link to="/the-mrf" class="navbar-brand">
            <span class="brand-text font-weight-light">Material Request</span>
          </router-link>

          <!-- Right navbar links -->
          <ul class="order-1 order-md-3 navbar-nav navbar-no-expand ml-auto">
            <li class="nav-item">
              <router-link to="/the-cart" class="nav-link">
                <i class="fas fa-shopping-cart"></i>
              </router-link>
            </li>

            <li class="nav-item">
              <a
                class="nav-link"
                data-widget="control-sidebar"
                data-slide="true"
                href="#"
                role="button"
              >
                <i class="fas fa-user"></i>
              </a>
            </li>
          </ul>
        </div>
      </nav>
      <!-- /.Top Navbar -->

      <!-- Main Sidebar Container -->
      <aside class="main-sidebar sidebar-dark-primary elevation-4">

        <!-- Sidebar -->
        <div class="sidebar">
          <!-- Sidebar Menu -->
          <nav class="mt-2">
            <ul
              class="nav nav-pills nav-sidebar flex-column"
              data-widget="treeview"
              role="menu"
              data-accordion="false"
            >
              <!-- nav-items checkbox filter -->
              <li class="nav-item">
                <a href="#" class="nav-link">
                  <i class="nav-icon far fa-envelope"></i>
                  <p>
                    Filter 1
                    <i class="fas fa-angle-left right"></i>
                  </p>
                </a>
                <ul class="nav nav-treeview">
                  <li class="nav-item">
                    <div class="nav-link">
                      <input
                        type="text"
                        class="form-control form-control-sm m-0"
                        placeholder="Search"
                        name=""
                        id=""
                      />
                    </div>
                  </li>

                  <li class="nav-item anyClass scroll-bar">
                    <div class="form-check" style="padding: 0 15px 0 35px">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckDefault"
                      />
                      <label
                        class="form-check-label text-light"
                        for="flexCheckDefault"
                      >
                        Default checkbox checkbox
                      </label>
                    </div>
                  </li>
                </ul>
              </li>
              <!-- /.nav-items checkbox filter -->
            </ul>
          </nav>
          <!-- /.sidebar-menu -->
        </div>
        <!-- /.sidebar -->
      </aside>

      <!-- Content Wrapper. Contains page content -->
      <div class="content-wrapper">
        <!-- Content Header (Page header) -->
        <div class="content-header">
          <div class="container">
            <div class="row mb-2">
              <div class="col">
                <!-- <h1 class="m-0"> Top Navigation <small>Example 3.0</small></h1> -->
                <!-- <span>Sort By:</span> -->
              </div>
              <!-- /.col -->
            </div>
            <!-- /.row -->
          </div>
          <!-- /.container-fluid -->
        </div>
        <!-- /.content-header -->

        <cart-content></cart-content>
      </div>
      <!-- /.content-wrapper -->

      <!-- Control Sidebar -->
      <control-sidebar></control-sidebar>
      <!-- /.control-sidebar -->

      <!-- Main Footer -->
      <main-footer></main-footer>
      <!-- /.Main Footer -->

    </div>
    <!-- ./wrapper -->
  </body>
</template>

<script>
import CartContent from "../../components/ui/mrf/cart/CartContent.vue";

import ControlSidebar from "../../components/layout/ControlSidebar.vue";
import MainFooter from "../../components/layout/MainFooter.vue";
export default {
  name: "TheCart",
  components: {
    CartContent,
    ControlSidebar,
    MainFooter,
  },
};
</script>
