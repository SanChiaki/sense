<template>
  <div class="container">
    <div class="title">dropdown</div>
    <div class="content">
      <div class="item">
        <div class="item-title">基本用法</div>
        <div class="item-sense">
          <ss-dropdown>
            <span>more<i class="icon-icon-down"></i></span>
            <ss-dropdown-menu slot="menu">
              <ss-dropdown-item>这是很长很长的文字</ss-dropdown-item>
              <ss-dropdown-item>操作2</ss-dropdown-item>
              <ss-dropdown-item>操作3</ss-dropdown-item>
            </ss-dropdown-menu>
          </ss-dropdown>
        </div>
      </div>
      <div class="item">
        <div class="item-title">不同的展示方式，默认为hover展示</div>
        <div class="item-sense">
          <ss-dropdown>
            <span>hover me<i class="icon-icon-down"></i></span>
            <ss-dropdown-menu slot="menu">
              <ss-dropdown-item>操作1</ss-dropdown-item>
              <ss-dropdown-item>操作2</ss-dropdown-item>
              <ss-dropdown-item>操作3</ss-dropdown-item>
            </ss-dropdown-menu>
          </ss-dropdown>
          <ss-dropdown :trigger="['click']">
            <span>click me<i class="icon-icon-down"></i></span>
            <ss-dropdown-menu slot="menu">
              <ss-dropdown-item>操作1</ss-dropdown-item>
              <ss-dropdown-item>操作2</ss-dropdown-item>
              <ss-dropdown-item>操作3</ss-dropdown-item>
            </ss-dropdown-menu>
          </ss-dropdown>
          <ss-dropdown :trigger="['hover', 'click']">
            <span>hover me or click me<i class="icon-icon-down"></i></span>
            <ss-dropdown-menu slot="menu">
              <ss-dropdown-item>操作1</ss-dropdown-item>
              <ss-dropdown-item>操作2</ss-dropdown-item>
              <ss-dropdown-item>操作3</ss-dropdown-item>
            </ss-dropdown-menu>
          </ss-dropdown>
        </div>
      </div>
      <div class="item">
        <div class="item-title">不同方位的</div>
        <div class="item-sense">
          <ss-dropdown placement="bottomLeft">
            <span>default bottomLeft<i class="icon-icon-down"></i></span>
            <ss-dropdown-menu slot="menu">
              <ss-dropdown-item>操作1</ss-dropdown-item>
              <ss-dropdown-item>操作2</ss-dropdown-item>
              <ss-dropdown-item>操作3</ss-dropdown-item>
            </ss-dropdown-menu>
          </ss-dropdown>
          <ss-dropdown placement="bottomRight">
            <span>bottomRight<i class="icon-icon-down"></i></span>
            <ss-dropdown-menu slot="menu">
              <ss-dropdown-item>操作1</ss-dropdown-item>
              <ss-dropdown-item>操作2</ss-dropdown-item>
              <ss-dropdown-item>操作3</ss-dropdown-item>
            </ss-dropdown-menu>
          </ss-dropdown>
          <ss-dropdown placement="bottomCenter">
            <span>bottomCenter<i class="icon-icon-down"></i></span>
            <ss-dropdown-menu slot="menu">
              <ss-dropdown-item>这是很长很长的文字</ss-dropdown-item>
              <ss-dropdown-item>操作2</ss-dropdown-item>
              <ss-dropdown-item>操作3</ss-dropdown-item>
            </ss-dropdown-menu>
          </ss-dropdown>
        </div>
      </div>
      <div class="item">
        <div class="item-title">存在禁止项</div>
        <div class="item-sense">
          <ss-dropdown>
            <span>more<i class="icon-icon-down"></i></span>
            <ss-dropdown-menu slot="menu">
              <ss-dropdown-item>操作1</ss-dropdown-item>
              <ss-dropdown-item disabled>无权限</ss-dropdown-item>
              <ss-dropdown-item>操作3</ss-dropdown-item>
            </ss-dropdown-menu>
          </ss-dropdown>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SsDropdown from '@/components/dropdown'
import SsDropdownMenu from '@/components/dropdown/dropdownMenu'
import SsDropdownItem from '@/components/dropdown/dropdownItem'

export default {
  components: {
    SsDropdown,
    SsDropdownMenu,
    SsDropdownItem
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

<style>
  .item-sense .ss-dropdown {
    margin-right: 20px;
  }
</style>
