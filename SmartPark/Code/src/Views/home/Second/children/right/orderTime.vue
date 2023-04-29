<template>
    <div class="orderTime">
        <Lease_title>周边实时违规事件</Lease_title>
        <div class="operating-table">
            <div class="operating-table-header">
                <span>时间</span>
                <span>地点</span>
                <span>类型</span>
                <span>状态</span>
            </div>
            <div class="line"></div>

            <ul>
                <Vue3SeamlessScroll :list="operatingTable" :hover="true" :step="0.3">
                    <li v-for="i in operatingTable" :key="i.id">
                        <span>{{ i.time }}</span>
                        <span>{{ i.place }}</span>
                        <span style="color: #e74921">{{ i.event }}</span>
                        <span>{{ i.status }}</span>
                        <!-- <span style="color: #ffc622">{{ i.operation }}</span> -->
                    </li>
                </Vue3SeamlessScroll>
            </ul>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { Vue3SeamlessScroll } from "vue3-seamless-scroll";
export default defineComponent({
    setup() {
        const operatingTable = [
            {
                id: 1,
                time:"10:26",
                place:"前海大道",
                event:"超速",
                status:"已解决",
            },
            {
                id: 2,
                time:"11:12",
                place:"宝安大道",
                event:"临停超时",
                status:"已解决",
            },
            {
                id: 3,
                time:"13:46",
                place:"前海大道",
                event:"胡乱鸣笛",
                status:"已解决",
            },
            {
                id: 4,
                time:"19:48",
                place:"梦海大道",
                event:"超速",
                status:"已解决",
            },
            {
                id: 5,
                time:"21:13",
                place:"前海大道",
                event:"超速",
                status:"已解决",
            },
            {
                id: 6,
                time:"22:30",
                place:"高新南大道",
                event:"车位乱停",
                status:"已解决",
            },
            {
                id: 7,
                time:"22:35",
                place:"前海大道",
                event:"逆向行驶",
                status:"已解决",
            },
            {
                id: 8,
                time:"23:17",
                place:"高新南大道",
                event:"临停超时",
                status:"已解决",
            },

        ]
        return {
            operatingTable
        }
    },
    components: {
        Vue3SeamlessScroll
    }

})

</script>
<style lang="scss" scoped>
.orderTime {
    // 滚动列表
    .operating-table {
        height: auto;
        @include Margin(20, 0, 10, 0);
        &-header {
            width: 100%;
            @include wHeight(40);
            background: rgba(58, 72, 85, 0.4);
            @include BorderRadius(2);
            @include Margin(10, 20, 0, 0);
            opacity: 0.7;
            font-family: PingFangSC-Regular;
            font-weight: Regular;
            @include FontSize(16);
            color: #ffffff;
            display: flex;
            justify-content: space-between;
            align-items: center;
            span {
                text-align: center;
                width:25%;
            }
            span:nth-child(1) {
                // @include Width(100);
            }
            span:nth-child(2) {
                // flex: 1;
            }
        }
        .line {
            width: 100%;
            @include wHeight(1);
            opacity: 0.5;
            background: #ffffff;
            @include MarginRight(108);
        }
        ul {
            width: 100%;
            @include MarginRight(20);
            @include wHeight(380);
            overflow-y: hidden;
            li {
                display: flex;
                justify-content: space-between;
                align-items: center;
                @include wHeight(50);
                // @include Padding(10, 5, 10, 5);
                @include LetterSpacing(2);
                font-family: PingFangSC-Medium;
                font-weight: Medium;
                @include FontSize(15);
                color: #ffffff;
                &:nth-child(even) {
                    @include wHeight(40);
                    background: rgba(62, 104, 172, 0.15);
                    @include BorderRadius(2);
                }
                span {
                    text-align: center;
                    white-space: nowrap;
                    text-overflow: ellipsis;
                    overflow: hidden;
                    width: 25%;
                }
                span:nth-child(1) {
                    // @include Width(80);
                }
                span:nth-child(2) {
                    // flex: 1;
                }
            }
        }
    }
}
</style>