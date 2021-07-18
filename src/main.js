import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import {
  Layout,
  Button,
  Breadcrumb,
  Menu,
  Spin,
  Result,
  Card,
  Divider,
  Col,
  Row,
  Drawer,
  Table,
  Form,
  InputNumber,
  Tag,
} from "ant-design-vue";

const app = createApp(App);
app.config.productionTip = false;
app.use(Layout);
app.use(Button);
app.use(Breadcrumb);
app.use(Menu);
app.use(Spin);
app.use(Result);
app.use(Card);
app.use(Divider);
app.use(Col);
app.use(Row);
app.use(Drawer);
app.use(Table);
app.use(Form);
app.use(InputNumber);
app.use(Tag);

app.use(store);
app.use(router);
app.mount("#app");
