<template>
  <div class="fluid container">
    <div class="col-md-3">
      <draggable
        element="div"
        v-model="list"
        :options="dragOptions1"
        :move="onMove"
        @remove="onRemove"
      >
        <transition-group class="list-group" tag="ul">
          <li class="list-group-item" v-for="element in list" :key="element.order">
            {{element.name}}
            <span class="badge">{{element.order}}</span>
          </li>
        </transition-group>
      </draggable>
    </div>

    <div class="col-md-3">
      <draggable element="div" v-model="list2" :options="dragOptions2" :move="onMove">
        <transition-group :name="'changeList'" class="list-group" tag="ul">
          <li
            class="list-group-item"
            v-for="(element,index) in list2"
            :key="element.order+''+index"
          >
            {{element.name}}
            <span class="badge">{{element.order}}</span>
          </li>
        </transition-group>
      </draggable>
    </div>

    <div class="list-group col-md-3">
      <pre>{{listString}}</pre>
    </div>
    <div class="list-group col-md-3">
      <pre>{{list2String}}</pre>
    </div>
  </div>
</template>

<script>
import draggable from "vuedraggable";
const message = ["A", "B", "C", "D", "E", "F", "G", "H"];

export default {
  name: "hello",
  components: {
    draggable
  },
  data() {
    return {
      list: message.map((name, index) => {
        return { name, order: index + 1, isList1: true };
      }),
      list2: [],
      delayedDragging: false
    };
  },
  methods: {
    onMove({ relatedContext, draggedContext }) {
      //移动后元素上下文
      const relatedElement = relatedContext.element;
      //移动的元素
      const draggedElement = draggedContext.element;
      if (!relatedElement || !relatedElement.isList1) {
        return true;
      } else {
        return false;
      }
    },
    onRemove(e) {
      let list2 = JSON.parse(JSON.stringify(this.list2));
      list2.forEach(item => {
        item.isList1 = false;
      });
      this.list2 = list2;
    }
  },
  computed: {
    dragOptions1() {
      return {
        animation: 0,
        group: {
          name: "description",
          pull: "clone"
        },
        ghostClass: "ghost"
      };
    },
    dragOptions2() {
      return {
        animation: 0,
        group: "description",
        ghostClass: "ghost",
        animation: 500,
        scroll: true
      };
    },
    listString() {
      return JSON.stringify(this.list, null, 2);
    },
    list2String() {
      return JSON.stringify(this.list2, null, 2);
    }
  },
  watch: {
  }
};
</script>

<style lang="scss" scoped type="text/css">
.fluid {
  margin: 50px 0;
}

.changeList-move {
  transition: transform 0s;
}

.changeList-leave-active {
  display: none;
}
.changeList-leave-to {
  display: none;
}
.ghost {
  opacity: 0.5;
  background: #c8ebfb;
}

.list-group {
  min-height: 500px;
}

.list-group-item {
  cursor: move;
}

.list-group-item i {
  cursor: pointer;
}
</style>
