<template>
  <CNavbar expandable="md" type="dark" color="info" class="py-3">
    <CToggler in-navbar @click="collapsed = !collapsed" />
    <CCollapse :show="collapsed" navbar>
      <CNavbarNav>
        <CNavbarBrand class="pr-4 pl-2">
          <router-link :to="{ name: 'Home' }" exact>News 365</router-link>
        </CNavbarBrand>
        <CNavItem>
          <router-link :to="{ name: 'TrendingPosts' }">Trending News</router-link>
        </CNavItem>
        <CNavItem>
          <router-link :to="{ name: 'About' }">About</router-link>
        </CNavItem>
      </CNavbarNav>

      <!-- Right aligned nav items -->
      <CNavbarNav class="ml-auto">
        <CForm inline>
          <CInput class="mr-sm-2" placeholder="Search" size="sm" />
          <CButton color="secondary" size="sm" class="my-2 my-sm-0" type="submit">Search</CButton>
        </CForm>

        <!-- <CDropdown toggler-text="Lang" nav placement="bottom-end">
          <CDropdownItem>EN</CDropdownItem>
          <CDropdownItem>ES</CDropdownItem>
          <CDropdownItem>RU</CDropdownItem>
          <CDropdownItem>FA</CDropdownItem>
        </CDropdown>-->

        <CDropdown nav toggler-text="User" placement="bottom-end">
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

<style lang="scss" scoped>
a {
  text-decoration: none !important;
  color: #000;
}

a .blog-nav-item-active {
  color: lightgreen !important;
}
.nav-item {
  font-size: 1.25rem;
  margin: 0 10px;
}
.navbar-brand {
  font-size: 1.6rem;
  font-weight: 700;
  letter-spacing: 1.3px;
}
</style>