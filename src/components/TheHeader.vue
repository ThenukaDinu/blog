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
      <CNavbarNav>
        <CNavbarBrand>
          <router-link
            :to="{ name: 'Home' }"
            exact
          >
            NavBar
          </router-link>
        </CNavbarBrand>
       
       
        <CNavItem>
          <router-link 
            :to="{ name: 'TrendingPosts' }"
          >
            Trainding News
          </router-link>
        </CNavItem>
        
       
        <CNavItem>
          <router-link 
            :to="{ name: 'About' }"
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

<style lang="scss" scoped>
a {
  text-decoration: none !important;
  color: #000;
}

a .blog-nav-item-active {
  color: lightgreen !important;
}
</style>