<template>
  <CNavbar
    expandable="md"
    type="dark"
    color="info"
  >
    <CToggler
      in-navbar
      @click="collapsed = !collapsed"
    />
    <CCollapse
      :show="collapsed"
      navbar
    >
      <CNavbarBrand href="#">
        <router-link
          to="/"
          exact
        >
          NavBar
        </router-link>
      </CNavbarBrand>
      <CNavbarNav>
        <CNavItem>
          <router-link 
            to="/trending"
          > 
            Trainding News
          </router-link>
        </CNavItem>
      </CNavbarNav>
      <CNavbarNav>
        <CNavItem>
          <router-link 
            to="/about"
          > 
            About
          </router-link>
        </CNavItem>
      </CNavbarNav>

      <!-- Right aligned nav items -->
      <CNavbarNav class="ml-auto">
        <CForm inline>
          <CInput
            class="mr-sm-2"
            placeholder="Search"
            size="sm"
          />
          <CButton
            color="secondary"
            size="sm"
            class="my-2 my-sm-0"
            type="submit"
          >
            Search
          </CButton>
        </CForm>

        <CDropdown
          toggler-text="Lang"
          nav
          placement="bottom-end"
        >
          <CDropdownItem>EN</CDropdownItem>
          <CDropdownItem>ES</CDropdownItem>
          <CDropdownItem>RU</CDropdownItem>
          <CDropdownItem>FA</CDropdownItem>
        </CDropdown>

        <CDropdown
          nav
          toggler-text="User"
          placement="bottom-end"
        >
          <CDropdownItem>Profile</CDropdownItem>
          <CDropdownItem>Signout</CDropdownItem>
        </CDropdown>
      </CNavbarNav>
    </CCollapse>
  </CNavbar>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      collapsed: false
    };
  }
};
</script>