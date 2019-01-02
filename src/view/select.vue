<template>
  <div class="container">
    <div class="title">select</div>
    <div class="content">
      <div class="item">
        <div class="item-title">select基本用法</div>
        <div class="item-sense">
          <ss-select v-model="select" placeholder="placeholder不是必须">
            <ss-option value="1" label="测试1"></ss-option>
            <ss-option value="2" label="测试2"></ss-option>
            <ss-option value="3" label="测试3"></ss-option>
          </ss-select>
        </div>
      </div>
      <div class="item">
        <div class="item-title">带有禁用项的</div>
        <div class="item-sense">
          <ss-select v-model="select1">
            <ss-option value="1" label="测试1" disabled></ss-option>
            <ss-option value="2" label="测试2"></ss-option>
            <ss-option value="3" label="测试3"></ss-option>
          </ss-select>
        </div>
      </div>
      <div class="item">
        <div class="item-title">select禁止</div>
        <div class="item-sense">
          <ss-select v-model="select2" disabled placeholder="小鹅通最好了，你不用选了">
          </ss-select>
        </div>
      </div>
      <div class="item">
        <div class="item-title">list为空</div>
        <div class="item-sense">
          <ss-select v-model="select3">
          </ss-select>
        </div>
      </div>
      <div class="item">
        <div class="item-title">多选换行{{ select4.toString() }}</div>
        <div class="item-sense">
          <ss-select v-model="select4" multiple>
            <ss-option value="1" label="小鹅通"></ss-option>
            <ss-option value="2" label="无与伦比"></ss-option>
            <ss-option value="3" label="超时代"></ss-option>
            <ss-option value="4" label="摩天轮"></ss-option>
            <ss-option value="5" label="地表最强"></ss-option>
          </ss-select>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SsSelect from '@/components/select'
import SsOption from '@/components/option'

export default {
  components: {
    SsSelect,
    SsOption
  },
  data() {
    return {
      select: '',
      list: [
        {
          value: '1',
          label: '小鹅通赞'
        }, {
          value: '2',
          label: '小鹅通专业'
        }, {
          value: '3',
          label: '小鹅通值得信赖'
        }
      ],
      select1: '',
      list1: [
        {
          value: '1',
          label: '小鹅通赞'
        }, {
          value: '2',
          label: '小鹅通专业'
        }, {
          value: '3',
          label: '小鹅通值得信赖'
        }, {
          value: '4',
          label: '小鹅通真的是太赞了',
          disabled: true
        }
      ],
      select2: '',
      list2: [],
      select3: '',
      list3: [],
      select4: '',
      list4: [
        {
          value: '1',
          label: '小鹅通赞'
        }, {
          value: '2',
          label: '小鹅通专业'
        }, {
          value: '3',
          label: '小鹅通值得信赖'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
  .title {
    padding: 20px;
    line-height: 50px;
    font-size: 32px;
    font-weight: 600;
    color: #353535;
  }
  .content {
    display: flex;
    flex-direction: column;
    padding: 0 20px;
    .item + .item {
      margin: 10px 0 0;
    }
    .item-title {
      font-size: 16px;
      font-weight: 600;
      line-height: 30px;
    }
  }
</style>
