<template>
  <div class="fluid container">
    <el-row :gutter="20">
      <el-col :span="6">
        <el-card>
          <draggable element="div" v-model="changeList" v-bind="getChangeOptions()" :move="onMove">
            <transition-group :name="'changeList'" class="changeListBox" tag="div">
              <div
                class="changeListItem"
                v-for="(item,index) in changeList"
                :key="item.id+''+index"
              >
                <el-card shadow="hover" :body-style="{ padding: '0px' }">
                  <template v-if="item.name == '轮播图'">
                    <div class="image" style="background: red"></div>
                  </template>
                  <template v-if="item.name == '功能菜单'">
                    <div class="image" style="background: blue"></div>
                  </template>
                  <template v-if="item.name == '付费会员'">
                    <div class="image" style="background: yellow"></div>
                  </template>
                  <template v-if="item.name == '优惠券'">
                    <div class="image" style="background: gray"></div>
                  </template>
                  <div style="padding: 0 14px;">
                    <span>{{item.name}}</span>
                    <el-button type="text" class="button">操作按钮</el-button>
                  </div>
                </el-card>
              </div>
            </transition-group>
          </draggable>
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card>
          <div v-for="items in commonList" :key="items.id">
            <el-card class="moduleGroup" shadow="never">
              <div slot="header" class="clearfix">
                <span>{{items.name}}</span>
              </div>
              <draggable
                element="div"
                v-model="items.children"
                v-bind="getCommonOptions()"
                :move="onMove"
                @remove="onRemove"
              >
                <transition-group class="enumBox" tag="div">
                  <div class="enumBoxItem" v-for="item in items.children" :key="item.id">
                    <div class="item">
                      <i :class="'iconfont'+' icon-'+item.icon"></i>
                      <div class>{{item.name}}</div>
                    </div>
                  </div>
                </transition-group>
              </draggable>
            </el-card>
          </div>
        </el-card>
      </el-col>
      <!-- <el-col :span="12">
        <el-card>
          <div class="list-group col-md-6">
            <pre>{{listString}}</pre>
          </div>
          <div class="list-group col-md-6">
            <pre>{{list2String}}</pre>
          </div>
        </el-card>
      </el-col>-->
    </el-row>
  </div>
</template>

<script>
import draggable from "vuedraggable";

export default {
  name: "hello",
  components: {
    draggable
  },
  data() {
    return {
      changeList: [],
      commonList: this.ENUM.commonList.map((item, index) => {
        return {
          name: item.name,
          children: item.children.map((it, i) => {
            return {
              id: i + 1,
              name: it.name,
              isCommonList: true,
              icon: it.icon
            };
          }),
          id: index + 1
        };
      }),
      delayedDragging: false
    };
  },
  mounted() {
    console.log(this.commonList);
  },
  methods: {
    onMove({ relatedContext, draggedContext }) {
      //移动后元素上下文
      const relatedElement = relatedContext.element;
      //移动的元素
      const draggedElement = draggedContext.element;
      if (!relatedElement || !relatedElement.isCommonList) {
        return true;
      } else {
        return false;
      }
    },
    onRemove(e) {
      let changeList = JSON.parse(JSON.stringify(this.changeList));
      changeList.forEach(item => {
        item.isCommonList = false;
      });
      this.changeList = changeList;
    },
    getCommonOptions() {
      return {
        animation: 0,
        group: {
          name: "description",
          pull: "clone"
        },
        ghostClass: "commonGhost"
      };
    },
    getChangeOptions() {
      return {
        animation: 0,
        group: "description",
        ghostClass: "changeGhost",
        animation: 500
      };
    }
  },
  computed: {
    listString() {
      return JSON.stringify(this.commonList, null, 2);
    },
    list2String() {
      return JSON.stringify(this.changeList, null, 2);
    }
  },
  watch: {}
};
</script>

<style lang="scss" scoped type="text/css">
.fluid {
  margin: 50px 0;
  width: 100%;
}
.iconfont {
  display: block;
  color: rgb(118, 118, 235);
}
.enumBox {
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-wrap: wrap;
}
.enumBoxItem {
  width: 28%;
  flex: 0 0 auto;
  text-align: center;
  transform: none !important;
  .iconfont {
    font-size: 40px;
  }
}
.changeListBox {
  min-height: 600px;
}
.changeListBox .image {
  height: 200px;
  width: 100%;
}
.changeList-leave-active {
  display: none;
}
.changeList-leave-to {
  display: none;
}
.commonGhost {
  opacity: 1;
}
.enumBoxItem.changeGhost {
  opacity: 0.5;
  background: #c8ebfb;
  width: 100%;
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.changeListItem .el-card {
  background: transparent;
}
.changeListItem.changeGhost {
  opacity: 0.5;
  background: #c8ebfb;
}
.list-group {
  min-height: 100px;
}
.list-group-item {
  cursor: move;
}
.list-group-item i {
  cursor: pointer;
}
</style>
