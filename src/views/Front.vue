<template>
    <div class="front">
        <div class="front_content">
            <div class="front_msg">
                <div class="front_textarea">
                    <div class="front_textarea_title">
                        Technical Description...
                    </div>
                    <textarea placeholder="Please enter a technical description of 250 to 300 words"
                        v-model="serchInp"></textarea>
                    <div class="front_textarea_func">
                        <button @click="clearSearch" class="normal_icon _clear"></button>
                        <button @click="submitSearch" class="normal_btn _generate">Generate</button>
                    </div>
                </div>
                <div class="front_info">
                    <div class="front_info_head">
                        <i class="icon _ai"></i>
                        <ul class="front_filter">
                            <li :class="['front_filter_item', index == filter_itemPage ? 'on' : '']"
                                v-for="(item, index) in filter_item" :key="index" @click="fliterItemHandler(index)">
                                {{ item }}
                            </li>
                        </ul>
                    </div>
                    <div class="front_info_content">
                        <ul class="front_info_group">
                            <li class="front_info_list" v-for="(item, index) in filter_item_content[0]" :key="index">
                                {{ item }}
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="front_detail">
                <div class="front_detail_head">
                    <i class="icon _ai"></i>
                    Search and List Predicate Device
                    <ul class="front_filter">
                        <li :class="['front_filter_item', index == tb_itemPage ? 'on' : '']"
                            v-for="(item, index) in filter_tb_item" :key="index" @click="fliterTbItem(index)">
                            {{ item }}
                        </li>
                    </ul>
                </div>
                <div class="front_detail_content">
                    <div class="front_detail_tbScroll" v-if="tb_itemPage == 0">
                        <table class="front_detail_tb">
                            <thead>
                                <tr>
                                    <th>Device <br> Class</th>
                                    <th>510(k) <br> Number</th>
                                    <th>Applicant</th>
                                    <th>DeviceName</th>
                                    <th>Decision <br> Date</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="(item, index) in filter_tb_content" :key="index">
                                    <td>{{ item.device_id }}</td>
                                    <td>
                                        <a href="https://www.google.com" target="_blank">{{ item.number }}</a>
                                    </td>
                                    <td>{{ item.applicant }}</td>
                                    <td>{{ item.DeviceName }}</td>
                                    <td>{{ item.date }}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div class="front_nodata" v-else>
                        <img src="../assets/images/icon_undefined.svg" alt="">
                        <div class="front_nodata_txt">Under Construction</div>
                    </div>
                </div>
            </div>
        </div>

        <div class="front_footer">
            Please note that our system utilizes data from the openFDA database, primarily covering reports and
            events related to medical devices. This information is intended for reference purposes only and should
            not be used to make specific decisions regarding medical care. For advice on the specific care and
            treatment of medical devices, consult with healthcare professionals.
        </div>

        <Loading v-if="showLoading"></Loading>

        <Alert v-if="alertMsg.show" :alertTitle="alertMsg.title" :alertMsg="alertMsg.msg" @alertConfirm="returnAlert">
        </Alert>
    </div>
</template>
<script>
import Loading from '../components/Loading'
import Alert from '../components/Alert'
// 假資料
var filter_itemData = ["All", "Potential Applications", "Benchmark Company", "Benchmark Product", "MD Assessment"]
var filter_itemContent = [
    [
        "[Potential Applications]潛在應用",
        "1. 精準腦部腫瘤切除：利用此技術，醫師能夠更精確地規劃切除腦部腫瘤的路徑，避免損傷重要的腦血管，降低手術風險。",
        "2. 腦動脈瘤手術：在治療腦動脈瘤時，此技術能夠幫助醫師確定最佳的手術進入點和路徑，以減少手術過程中對周圍組織的損傷。",
        "3. 腦血管異常修復：對於腦血管異常（如動靜脈畸形）的修復手術，此技術能提供更清晰的血管結構視圖，幫助醫師進行精確修復。",
        "4. 神經功能保護手術：在進行可能影響神經功能的手術時，此技術能夠幫助醫師避開關鍵的神經結構，保護病人的神經功能。",
        "5. 教育與訓練：此技術可用於醫學教育和手術訓練，提供學生和醫生更直觀的3D腦部結構和血管模型，增進手術技巧的學習。",
        "6. 手術模擬：在實際手術前，醫師可以利用此技術進行手術模擬，提高手術計劃的準確性和成功率。",
        "7. 術中即時導航：在手術過程中，此技術能夠提供即時的3D導航，幫助醫師根據實際情況調整手術策略。",
        "8. 術中即時導航：在手術過程中，此技術能夠提供即時的3D導航，幫助醫師根據實際情況調整手術策略。",
        "9. 術中即時導航：在手術過程中，此技術能夠提供即時的3D導航，幫助醫師根據實際情況調整手術策略。",
        "10. 術中即時導航：在手術過程中，此技術能夠提供即時的3D導航，幫助醫師根據實際情況調整手術策略。",
        "11. 術中即時導航：在手術過程中，此技術能夠提供即時的3D導航，幫助醫師根據實際情況調整手術策略。",
    ]
]
var filter_tb_itemData = ["510K", "De Novo", "PMA", "Registration ＆ Listing"]
var filter_tbData = [
    {
        device_id: 2,
        number: "K232802",
        applicant: "Think Surgical, Inc.,",
        DeviceName: "TMINI Miniature Robotic System",
        date: "2023/10/12"
    },
    {
        device_id: 2,
        number: "K232802",
        applicant: "Think Surgical, Inc.,",
        DeviceName: "TMINI Miniature Robotic System",
        date: "2023/10/12"
    },
    {
        device_id: 2,
        number: "K232802",
        applicant: "Think Surgical, Inc.,",
        DeviceName: "TMINI Miniature Robotic System",
        date: "2023/10/12"
    },
    {
        device_id: 2,
        number: "K232802",
        applicant: "Think Surgical, Inc.,",
        DeviceName: "TMINI Miniature Robotic System",
        date: "2023/10/12"
    },
    {
        device_id: 2,
        number: "K232802",
        applicant: "Think Surgical, Inc.,",
        DeviceName: "TMINI Miniature Robotic System",
        date: "2023/10/12"
    },
    {
        device_id: 2,
        number: "K232802",
        applicant: "Think Surgical, Inc.,",
        DeviceName: "TMINI Miniature Robotic System",
        date: "2023/10/12"
    },
    {
        device_id: 2,
        number: "K232802",
        applicant: "Think Surgical, Inc.,",
        DeviceName: "TMINI Miniature Robotic System",
        date: "2023/10/12"
    },
    {
        device_id: 2,
        number: "K232802",
        applicant: "Think Surgical, Inc.,",
        DeviceName: "TMINI Miniature Robotic System",
        date: "2023/10/12"
    },
    {
        device_id: 2,
        number: "K232802",
        applicant: "Think Surgical, Inc.,",
        DeviceName: "TMINI Miniature Robotic System",
        date: "2023/10/12"
    },
    {
        device_id: 2,
        number: "K232802",
        applicant: "Think Surgical, Inc.,",
        DeviceName: "TMINI Miniature Robotic System",
        date: "2023/10/12"
    },
    {
        device_id: 2,
        number: "K232802",
        applicant: "Think Surgical, Inc.,",
        DeviceName: "TMINI Miniature Robotic System",
        date: "2023/10/12"
    },
    {
        device_id: 2,
        number: "K232802",
        applicant: "Think Surgical, Inc.,",
        DeviceName: "TMINI Miniature Robotic System",
        date: "2023/10/12"
    },
    {
        device_id: 2,
        number: "K232802",
        applicant: "Think Surgical, Inc.,",
        DeviceName: "TMINI Miniature Robotic System",
        date: "2023/10/12"
    },
    {
        device_id: 2,
        number: "K232802",
        applicant: "Think Surgical, Inc.,",
        DeviceName: "TMINI Miniature Robotic System",
        date: "2023/10/12"
    },
    {
        device_id: 2,
        number: "K232802",
        applicant: "Think Surgical, Inc.,",
        DeviceName: "TMINI Miniature Robotic System",
        date: "2023/10/12"
    },
]
export default {

    data() {
        return {
            serchInp: "",
            showLoading: false,
            filter_item: [],
            filter_itemPage: 0,
            filter_tb_item: [],
            tb_itemPage: 0,
            filter_item_content: [],
            filter_tb_content: [],
            // 系統異常false 改 true
            alertMsg: {
                show: false,
                title: "系統異常",
                msg: "目前系統異常，請在稍後再次執行",
            }
        };
    },
    components: {
        Loading,
        Alert
    },
    methods: {
        clearSearch() {
            this.serchInp = ""
        },
        submitSearch() {
            this.showLoading = true
            var dow = document.querySelector("#dow");
            dow.removeAttribute("disabled")
            this.fakeGet()
        },
        fliterItemHandler(i) {
            this.filter_itemPage = i
        },
        fliterTbItem(i) {
            this.tb_itemPage = i
        },
        // 這是測試用的
        fakeGet() {
            setTimeout(() => {
                this.showLoading = false
                this.filter_item = filter_itemData
                this.filter_tb_item = filter_tb_itemData
                this.filter_item_content = filter_itemContent
                this.filter_tb_content = filter_tbData
            }, 1000);
        },
        returnAlert() {
            this.alertMsg.show = false
            this.alertMsg.title = ""
            this.alertMsg.msg = ""
        },

    }
}
</script>