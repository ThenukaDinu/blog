<template>
  <CNavbar expandable="md" type="dark" color="info">
    <CToggler in-navbar @click="collapsed = !collapsed" />
    <CNavbarBrand href="#">NavBar</CNavbarBrand>
    <CCollapse :show="collapsed" navbar>
      <CNavbarNav>
        <CNavItem href="#">Link</CNavItem>
        <CNavItem href="#" disabled>Disabled</CNavItem>
      </CNavbarNav>

      <!-- Right aligned nav items -->
      <CNavbarNav class="ml-auto">
        <CForm inline>
          <CInput class="mr-sm-2" placeholder="Search" size="sm" />
          <CButton color="secondary" size="sm" class="my-2 my-sm-0" type="submit">Search</CButton>
        </CForm>

        <CDropdown togglerText="Lang" nav placement="bottom-end">
          <CDropdownItem>EN</CDropdownItem>
          <CDropdownItem>ES</CDropdownItem>
          <CDropdownItem>RU</CDropdownItem>
          <CDropdownItem>FA</CDropdownItem>
        </CDropdown>

        <CDropdown nav togglerText="User" placement="bottom-end">
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