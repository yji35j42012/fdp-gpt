<template>
    <div class="backend">
        <div class="backend_content">
            <!-- 反灰class加上_desable -->
            <div :class="['backend_list', item.show ? '' : '_desable']" v-for="(item, index) in b_data" :key="index">
                <div class="backend_list_info" :data-num="index + 1">
                    <div class="backend_textareaBox">
                        <textarea class="backend_textarea" :ref="'f' + index" v-model="item.txt"></textarea>
                    </div>
                </div>
                <div v-if="index == 0" class="backend_list_bot" data-bef="起始問題"></div>
                <div v-else class="backend_list_bot" data-bef="接續第" data-aft="個問答">
                    <input type="number">
                </div>
            </div>
        </div>
        <ul class="backend_filter">
            <li class="backend_filter_list">
                <p class="backend_filter_txt">Prompt 數量</p>
                <div class="numBox">
                    <button class="numBox_btn _minus" @click="countHandler(-1)">
                        <i></i>
                    </button>
                    <div class="numBox_num">{{ b_func.Prompt_count }}</div>
                    <!-- <input class="normal_inp" type="number" min="1" v-model="b_func.Prompt_count"> -->
                    <button class="numBox_btn _plus" @click="countHandler(1)">
                        <i></i>
                    </button>
                </div>
            </li>
            <li class="backend_filter_list">
                <p class="backend_filter_txt">回答身份</p>
                <input type="text" class="normal_inp" v-model="b_func.identity">
            </li>
            <li class="backend_filter_list">
                <p class="backend_filter_txt">標題名稱</p>
                <input type="text" class="normal_inp" v-model="b_func.title">
            </li>
            <li class="backend_filter_list _btxt" data-note="請用 “/ “ 分開如：software/system">
                <p class="backend_filter_txt">停用詞</p>
                <input type="text" class="normal_inp" v-model="b_func.words">
            </li>
            <li class="backend_filter_list">
                <p class="backend_filter_txt">替換原文關鍵詞</p>
                <input type="text" class="normal_inp" v-model="b_func.keywords">
            </li>
            <li class="backend_filter_list _tline">
                <p class="backend_filter_txt">api key</p>
                <input type="text" class="normal_inp" v-model="b_func.apikey">
            </li>
            <li class="backend_filter_list">
                <p class="backend_filter_txt">GPT 版本</p>
                <input type="text" class="normal_inp" v-model="b_func.version">
            </li>
            <li class="backend_filter_list _test _bline">
                <button class="normal_btn _generate _test" @click="testGpt">測試</button>
            </li>
            <li class="backend_filter_list">
                <p class="backend_filter_txt">溫度</p>
                <div class="numBox">
                    <button class="numBox_btn _minus" @click="tempHandler(-1)">
                        <i></i>
                    </button>
                    <div class="numBox_num">{{ b_func.temp }}</div>
                    <!-- <input class="normal_inp" type="number" min="0" max="2.2" v-model="b_func.temp"> -->
                    <button class="numBox_btn _plus" @click="tempHandler(1)">
                        <i></i>
                    </button>
                </div>
            </li>
            <li class="backend_filter_list">
                <button class="normal_btn _generate" @click="saveHandler">儲存</button>
            </li>
        </ul>


        <Alert v-if="alertMsg.show" :alertTitle="alertMsg.title" :alertMsg="alertMsg.msg" @alertConfirm="returnAlert">
        </Alert>
    </div>
</template>


<script>
import Alert from '../components/Alert'
export default {
    data() {
        return {
            b_func: {
                Prompt_count: 1,
                identity: "",
                title: "",
                words: "",
                keywords: "",
                apikey: "",
                version: "",
                temp: 0
            },
            b_data: [
                {
                    b_dataId: 0,
                    txt: "根據〔技術描述 〕，列出3～10項與醫療相關“的可能的“potential Applications ”潛在應用，回答一開始先加上標題：〔potential Applications〕，標題加上中括號。技術描述：〔輸入內容 〕。請使用英文回答",
                    show: true
                }
            ],
            b_dataNum: 0,
            alertMsg: {
                show: false,
                title: "",
                msg: "",
            }
        };
    },
    components: {
        Alert
    },
    mounted() {
        this.$refs.f0[0].focus()
    },
    methods: {
        saveHandler() {
            // 假判斷
            if (this.b_func.keywords !== "") {
                this.alertMsg.title = "輸入錯誤"
                this.alertMsg.msg = "請輸入正確的版本、關鍵詞"

            } else {
                this.alertMsg.title = "儲存"
                this.alertMsg.msg = "儲存成功"
            }
            this.alertMsg.show = true

        },
        returnAlert() {
            this.alertMsg.show = false
            this.alertMsg.title = ""
            this.alertMsg.msg = ""
        },
        countHandler(n) {
            if (n < 0 && this.b_func.Prompt_count > 1) {
                this.b_func.Prompt_count--
                this.minusB_data()
            } else if (n > 0) {
                this.b_func.Prompt_count++
                this.setB_data()
            }
        },
        setB_data() {
            if (this.b_dataNum == 0) {
                this.b_data.push(
                    {
                        b_dataId: this.b_data.length,
                        txt: "根據〔技術描述 〕，列出3～10項與醫療相關“的可能的“potential Applications ”潛在應用，回答一開始先加上標題：〔potential Applications〕，標題加上中括號。技術描述：〔輸入內容 〕。請使用英文回答根據〔技術描述 〕，列出3～10項與醫療相關“的可能的“potential Applications ”潛在應用，回答一開始先加上標題：〔potential Applications〕，標題加上中括號。技術描述：〔輸入內容 〕。請使用英文回答",
                        show: true
                    }
                )
            } else if (this.b_dataNum > 0) {
                console.log('b_dataNum', this.b_dataNum);
                this.b_data[this.b_data.length - this.b_dataNum].show = true
                this.b_dataNum--
            }
        },
        minusB_data() {
            if (this.b_data.length > 1) {
                this.b_data[this.b_data.length - 1 - this.b_dataNum].show = false
                this.b_dataNum++
            }
        },
        tempHandler(n) {
            if (n < 0 && this.b_func.temp > 0) {
                this.b_func.temp -= 0.1
                this.b_func.temp = parseFloat(this.b_func.temp.toFixed(2));
            } else if (n > 0 && this.b_func.temp < 2.2) {
                this.b_func.temp = this.b_func.temp + 0.1
                this.b_func.temp = parseFloat(this.b_func.temp.toFixed(2));
            }
        },
        testGpt() {
            this.alertMsg.show = true
            this.alertMsg.title = "測試結果"
            this.alertMsg.msg = "GPT 回覆結果文案在此GPT 回覆結果文案在此GPT 回覆結果文案在此GPT 回覆結果文案在此GPT 回覆結果文案在此GPT 回覆結果文案在此GPT 回覆結果文案在此GPT 回覆結果文案在此GPT 回覆結果文案在此GPT 回覆結果文案在此GPT 回覆結果文案在此GPT 回覆結果文案在此GPT 回覆結果文案在此GPT 回覆結果文案在此GPT 回覆結果文案在此"
        }
    }
}
</script>