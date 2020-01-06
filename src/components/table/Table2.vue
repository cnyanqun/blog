<template>
  <el-table :data="tableData" :span-method="hang" border style="width: 100%">
    <el-table-column prop="id" label="ID" width="180"></el-table-column>
    <el-table-column prop="name" label="姓名"></el-table-column>
    <el-table-column prop="amount1" sortable label="数值 1"></el-table-column>
    <el-table-column prop="amount2" sortable label="数值 2"></el-table-column>
    <el-table-column prop="amount3" sortable label="数值 3"></el-table-column>
  </el-table>
</template>
<script>
export default {
  data() {
    return {
      tableData: [
        {
          id: "1",
          name: "王小虎1",
          amount1: "234",
          amount2: "3.2",
          amount3: 10
        },
        {
          id: "2",
          name: "王小虎2",
          amount1: "165",
          amount2: "4.43",
          amount3: 12
        },
        {
          id: "3",
          name: "王小虎3",
          amount1: "324",
          amount2: "1.9",
          amount3: 9
        },
        {
          id: "4",
          name: "王小虎4",
          amount1: "621",
          amount2: "2.2",
          amount3: 17
        },
        {
          id: "5",
          name: "王小虎5",
          amount1: "539",
          amount2: "4.1",
          amount3: 15
        }
      ]
    };
  },
  methods: {
    arraySpanMethod({ row, column, rowIndex, columnIndex }) {
      console.log(row, column, rowIndex, columnIndex);
      //合并列
      if (rowIndex === 0) {
        if (columnIndex === 0) {
          //[1, 2]合并1行，2个单元格
          return [1, 2];
        } else if (columnIndex === 1) {
          //上面合了哪一条我就得在这把这条整没
          return [0, 0];
        }
      }
    },
    hang({ row, column, rowIndex, columnIndex }) {
      console.log(row, column, rowIndex, columnIndex);
      //合并行
      if (columnIndex === 0 || columnIndex === 1 || columnIndex === 2) {
        if (rowIndex === 0) {
          //[1, 2]合并2行，1个单元格
          return [3, 1];
        } else if (rowIndex === 1 || rowIndex === 2) {
          return [0, 0];
        }
      }
    },
    objectSpanMethod({ row, column, rowIndex, columnIndex }) {
      console.log(row, column, rowIndex, columnIndex);
      // 合并行
      if (columnIndex === 0) {
        if (rowIndex === 0) {
          //[2,1]合并2行，1个单元格
          return [3, 3];
        } else if (rowIndex === 1) {
          return [0, 0];
        }else if (rowIndex === 2) {
          return [0, 0];
        }
      } else {
        if (rowIndex == 0 && (columnIndex === 1 || columnIndex === 2)) {
          return [0, 0];
        }
        if (rowIndex === 1 && (columnIndex === 1 || columnIndex === 2)) {
          return [0, 0];
        }
        if (rowIndex === 2 && (columnIndex === 1 || columnIndex === 2)) {
          return [0, 0];
        }
      }
    }
  }
};
</script>