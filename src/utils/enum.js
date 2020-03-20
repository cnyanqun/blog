import Vue from 'vue'
const ENUM = {
  //控件
  commonList: [{
      name: "通用控件",
      children: [{
          name: "轮播图",
          icon: "lunbo"
        },
        {
          name: "功能菜单",
          icon: "gongnengcaidan"
        }
      ]
    },
    {
      name: "营销控件",
      children: [{
          name: "付费会员",
          icon: "vip"
        },
        {
          name: "优惠券",
          icon: "youhuiquan"
        }
      ]
    }
  ]
}
Vue.prototype.ENUM = ENUM
