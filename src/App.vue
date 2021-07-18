<template>
  <a-layout id="components-layout-dian" class="layout">
    <a-layout-header>
      <a-row type="flex" justify="space-between">
        <a-col> <div class="logo" /></a-col>
        <a-col>
          <a-menu
            theme="dark"
            mode="horizontal"
            v-model:selectedKeys="selectedKeys"
            :style="{ lineHeight: '64px' }"
          >
            <a-menu-item
              v-for="item in menuItems"
              :key="item.key"
              @click="menuClick(item.name)"
            >
              {{ item.title }}
            </a-menu-item>
          </a-menu>
        </a-col>
      </a-row>
    </a-layout-header>

    <a-layout-content style="padding: 0 50px">
      <a-breadcrumb style="margin: 16px 0">
        <a-breadcrumb-item>Home</a-breadcrumb-item>
        <a-breadcrumb-item>List</a-breadcrumb-item>
        <a-breadcrumb-item>App</a-breadcrumb-item>
      </a-breadcrumb>
      <div :style="{ background: '#fff', padding: '24px', minHeight: '280px' }">
        <router-view></router-view>
      </div>
    </a-layout-content>
    <a-layout-footer style="text-align: center">
      Dian ©2021 Created by GSM
    </a-layout-footer>
  </a-layout>
</template>

<script>
import { ref, watchEffect } from "vue";
import { useStore } from "vuex";
import { useRouter, useRoute } from "vue-router";

const menuItems = [
  { name: "Home", title: "Inicio", key: "1" },
  { name: "Drugstore", title: "Droguería", key: "2" },
  { name: "Distributor", title: "Distribuidora", key: "3" },
  { name: "About", title: "Nosotros", key: "4" },
];

export default {
  setup() {
    const router = useRouter();
    const route = useRoute();
    const store = useStore();

    const selectedKeys = ref([]);

    const menuClick = (name) => {
      router.push({ name: name });
    };

    watchEffect(() => {
      if (route.name !== undefined) {
        let currentRouter = menuItems.find((x) => x.name === route.name);
        selectedKeys.value = [currentRouter.key];
      }
    });

    store.dispatch("products/getAllCategories");
    store.dispatch("products/getAllProducts");

    return {
      selectedKeys,
      menuItems,
      menuClick,
    };
  },
};
</script>

<style scoped lang="less">
.site-layout-content {
  min-height: 280px;
  padding: 24px;
  background: #fff;
}
#components-layout-dian {
  .logo {
    float: left;
    width: 120px;
    height: 31px;
    margin: 16px 24px 16px 0;
    background: rgba(255, 255, 255, 0.3);
  }
}
.ant-row-rtl {
  #components-layout-dian {
    .logo {
      float: right;
      margin: 16px 0 16px 24px;
    }
  }
}
[data-theme="dark"] {
  .site-layout-content {
    background: #141414;
  }
}
</style>
