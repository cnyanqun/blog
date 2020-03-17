<template>
  <div class="fluid container">
    <div class="form-group form-group-lg panel panel-default">
      <div class="panel-heading">
        <h3 class="panel-title">Sortable control</h3>
      </div>
      <div class="panel-body">
        <div class="checkbox">
          <label>
            <input type="checkbox" v-model="editable" />Enable drag and drop
          </label>
        </div>
        <button type="button" class="btn btn-default" @click="orderList">Sort by original order</button>
      </div>
    </div>

    <div class="col-md-3">
      <draggable
        class="list-group"
        element="ul"
        v-model="list"
        :options="dragOptions1"
        :move="onMove"
        @start="isDragging=true"
        @end="isDragging=false"
      >
        <transition-group type="transition" :name="'flip-list'">
          <li class="list-group-item" v-for="(element, index) in list" :key="index">
            <i
              :class="element.fixed? 'fa fa-anchor' : 'glyphicon glyphicon-pushpin'"
              @click=" element.fixed=! element.fixed"
              aria-hidden="true"
            ></i>
            {{element.name}}
            <span class="badge">{{element.order}}</span>
          </li>
        </transition-group>
      </draggable>
    </div>

    <div class="col-md-3">
      <draggable element="span" v-model="list2" :options="dragOptions2" :move="onMove">
        <transition-group name="no" class="list-group" tag="ul">
          <li class="list-group-item" v-for="(element, index) in list2" :key="index">
            <i
              :class="element.fixed? 'fa fa-anchor' : 'glyphicon glyphicon-pushpin'"
              @click=" element.fixed=! element.fixed"
              aria-hidden="true"
            ></i>
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
const message = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H"
];

export default {
  name: "hello",
  components: {
    draggable
  },
  data() {
    return {
      list: message.map((name, index) => {
        return { name, order: index + 1, fixed: false };
      }),
      list2: [],
      editable: true,
      isDragging: false,
      delayedDragging: false
    };
  },
  methods: {
    orderList() {
      this.list = this.list.sort((one, two) => {
        return one.order - two.order;
      });
    },
    onMove({ relatedContext, draggedContext }) {
      const relatedElement = relatedContext.element;
      const draggedElement = draggedContext.element;
      console.log(relatedElement,draggedElement)
      console.log((!relatedElement || !relatedElement.fixed) && !draggedElement.fixed)
      return (
        (!relatedElement || !relatedElement.fixed) && !draggedElement.fixed
      );
    }
  },
  computed: {
    dragOptions1() {
      return {
        animation: 0,
        group: {
          name: 'description',
          pull: 'clone'
        },
        disabled: !this.editable,
        ghostClass: "ghost"
      };
    },
    dragOptions2() {
      return {
        animation: 0,
        group: 'description',
        disabled: !this.editable,
        ghostClass: "ghost"
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
    isDragging(newValue) {
      if (newValue) {
        this.delayedDragging = true;
        return;
      }
      this.$nextTick(() => {
        this.delayedDragging = false;
      });
    }
  }
};
</script>

<style>
.flip-list-move {
  transition: transform 0.5s;
}

.no-move {
  transition: transform 0s;
}

.ghost {
  opacity: 0.5;
  background: #c8ebfb;
}

.list-group {
  min-height: 20px;
}

.list-group-item {
  cursor: move;
}

.list-group-item i {
  cursor: pointer;
}
</style>
