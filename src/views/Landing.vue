<template>
    <div class="landing">
        <div id="home" class="landing_banner">
            <div class="landing_banner_txt">
                <img src="../assets/images/landing_logo.svg" alt="" class="landing_logo">
                <div class="landing_banner_t1">Empowering Solutions, Global Reach</div>
                <div class="landing_banner_t2">MEDPilot's AI at Your Service</div>
                <div class="landing_banner_t3">Intelligent Tools for FDA submission</div>

                <router-link to="/front" class="border_btn _blue">Try It Now!</router-link>

                <span class="landing_banner_scroll">Scroll<i class="icon _down"></i></span>
            </div>

        </div>
        <div id="about" class="landing_info _about">
            <h1>About</h1>
            <div class="landing_about">
                <div class="landing_about_img">
                    <img src="../assets/images/about_img.jpg" alt="">
                </div>
                <div class="landing_about_txt">
                    We are committed to driving the development of ​medical equipment through innovative technology,
                    ​using AI tool as a guide to provide smarter ​decision-making support for startup company.
                    <br><br>
                    Empowering Solutions, Global Reach MEDPilot's AI at Your Service
                </div>
            </div>
        </div>
        <div id="highlights" class="landing_info _highlights">
            <h1>Highlights</h1>
            <ul class="landing_highlights">
                <li class="landing_highlights_item">
                    <div class="landing_highlights_img">
                        <img src="../assets/images/highlights_img_1.png" alt="">
                    </div>
                    <div class="landing_highlights_title">Streamline</div>
                    <div class="landing_highlights_txt">
                        Simple and smooth process ​makes complex tasks easier ​to handle.
                    </div>
                </li>
                <li class="landing_highlights_item">
                    <div class="landing_highlights_img">
                        <img src="../assets/images/highlights_img_2.png" alt="">
                    </div>
                    <div class="landing_highlights_title">Catalyzing</div>
                    <div class="landing_highlights_txt">
                        Quickly obtain product-​related similar product ​review documents 510(K) to ​speed up the
                        product launch ​process.
                    </div>
                </li>
                <li class="landing_highlights_item">
                    <div class="landing_highlights_img">
                        <img src="../assets/images/highlights_img_3.png" alt="">
                    </div>
                    <div class="landing_highlights_title">Seamless</div>
                    <div class="landing_highlights_txt">
                        Good user experience allows ​those without medical device ​review experience to easily
                        ​understand the review ​submission requirements.
                    </div>
                </li>
            </ul>
        </div>
        <div id="products" class="landing_info _products">
            <div class="landing_products_bg">
                <svg version="1.1" id="圖層_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                    x="0px" y="0px" viewBox="0 0 1845 1065" style="enable-background:new 0 0 1845 1065;"
                    xml:space="preserve">

                    <path class="st0" d="M1575.7,155.5c-359.3-207.3-946.9-207.3-1306.1,0c-359.4,207.4-359.4,546.6,0,753.9
	c359.2,207.4,946.8,207.4,1306.1,0C1934.8,702.1,1934.8,362.9,1575.7,155.5z" />
                </svg>
            </div>
            <h1>Products</h1>
            <div class="landing_products">
                <div class="landing_products_img">
                    <img src="../assets/images/products_img.svg" alt="">
                </div>
                <div class="landing_products_content">
                    <div class="landing_products_title">Stay Tuned</div>
                    <div class="landing_products_txt">For Some Exciting news</div>
                    <ul class="landing_products_circles">
                        <li>De Novo</li>
                        <li>PMA</li>
                    </ul>
                </div>
            </div>
        </div>
        <div id="team" class="landing_info _team">
            <h1>Team</h1>
            <ul class="landing_team">
                <li class="landing_team_item" v-for="(item) in teamData">
                    <div class="landing_team_pic">
                        <img :src="item.team_src" alt="">
                    </div>
                    <div class="landing_team_title">{{ item.team_title }}</div>
                    <div class="landing_team_name">{{ item.team_name }}</div>
                    <div class="landing_team_txt">{{ item.team_info }}</div>
                </li>
            </ul>
        </div>
        <div id="contact" class="landing_info _contact">
            <h1>Contact</h1>
            <div class="logo" data-txt="MEDPILOT">
                <img src="../assets/images/logo.svg" alt="">
            </div>
            <ul class="landing_contact">
                <li class="landing_contact_item" data-txt="Address：">
                    (106-36) Floor 1,14-15, No. 106, Section 2, Heping East Road, Taipei City
                </li>
                <li class="landing_contact_item" data-txt="Tel：">+886- 2 - 2737 - 7769</li>
                <li class="landing_contact_item" data-txt="Email：">
                    <a href="mailto:christinewang1217@gmail.com">christinewang1217@gmail.com</a>
                </li>
                <li class="landing_contact_item _privacy">
                    Privacy and Information Security Policy
                </li>
                <li class="landing_contact_item _logo">
                    <img src="../assets/images/stpi_logo_en.png" alt="">
                </li>
            </ul>
        </div>
    </div>
</template>


<script>

export default {
    data() {
        return {
            teamData: [
                {
                    team_title: "CEO",
                    team_src: require('../assets/images/team_ceo.jpg'),
                    team_name: "Christine Wang",
                    team_info: "PhD in Biomedical Engineering,\nMedical Device,Safety &\nRegulation, PMP"
                },
                {
                    team_title: "CTO",
                    team_src: require('../assets/images/team_cto.jpg'),
                    team_name: "Ernest An",
                    team_info: "PhD in Mechanical Engineering,\nComputer Vision,Medical Image Processing,Surgical Guidance System"
                },
                {
                    team_title: "CIO",
                    team_src: require('../assets/images/team_cio.jpg'),
                    team_name: "LiangCheng Chen",
                    team_info: "MBA in Economics,Data Analysis"
                },
                {
                    team_title: "CMO",
                    team_src: require('../assets/images/team_cmo.jpg'),
                    team_name: "TaiYing Li",
                    team_info: "MBA in Technology Management,\nUser Experience"
                },
                {
                    team_title: "AI Consultant",
                    team_src: require('../assets/images/team_consultant.jpg'),
                    team_name: "Alvin Cheng",
                    team_info: "MA in Computer Science,Advanced Artificial Intelligence,Machine Learning Consult"
                },
            ]
        };
    },
    components: {},
    mounted() { },
    methods: {
    }
}
</script>