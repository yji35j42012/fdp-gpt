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
                    Smart Solutions, Global Reach MEDPilot's AI at Your Service
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
        <div id="pruducts" class="landing_info _products">
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
                <li class="landing_team_item">
                    <div class="landing_team_pic">
                        <img src="../assets/images/team_img.png" alt="">
                    </div>
                    <div class="landing_team_title">Jenny Wilson</div>
                    <div class="landing_team_txt">Medical Assistant</div>
                </li>
                <li class="landing_team_item">
                    <div class="landing_team_pic">
                        <img src="../assets/images/team_img.png" alt="">
                    </div>
                    <div class="landing_team_title">Jenny Wilson</div>
                    <div class="landing_team_txt">Medical Assistant</div>
                </li>
                <li class="landing_team_item">
                    <div class="landing_team_pic">
                        <img src="../assets/images/team_img.png" alt="">
                    </div>
                    <div class="landing_team_title">Jenny Wilson</div>
                    <div class="landing_team_txt">Medical Assistant</div>
                </li>
                <li class="landing_team_item">
                    <div class="landing_team_pic">
                        <img src="../assets/images/team_img.png" alt="">
                    </div>
                    <div class="landing_team_title">Jenny Wilson</div>
                    <div class="landing_team_txt">Medical Assistant</div>
                </li>
                <li class="landing_team_item">
                    <div class="landing_team_pic">
                        <img src="../assets/images/team_img.png" alt="">
                    </div>
                    <div class="landing_team_title">Jenny Wilson</div>
                    <div class="landing_team_txt">Medical Assistant</div>
                </li>
                <li class="landing_team_item">
                    <div class="landing_team_pic">
                        <img src="../assets/images/team_img.png" alt="">
                    </div>
                    <div class="landing_team_title">Jenny Wilson</div>
                    <div class="landing_team_txt">Medical Assistant</div>
                </li>
                <li class="landing_team_item">
                    <div class="landing_team_pic">
                        <img src="../assets/images/team_img.png" alt="">
                    </div>
                    <div class="landing_team_title">Jenny Wilson</div>
                    <div class="landing_team_txt">Medical Assistant</div>
                </li>
                <li class="landing_team_item">
                    <div class="landing_team_pic">
                        <img src="../assets/images/team_img.png" alt="">
                    </div>
                    <div class="landing_team_title">Jenny Wilson</div>
                    <div class="landing_team_txt">Medical Assistant</div>
                </li>
            </ul>
        </div>
        <div id="contact" class="landing_info _contact">
            <h1>Contact</h1>
            <ul class="landing_contact">
                <li class="landing_contact_item" data-txt="Address：">
                    (106-36) Floor 1,14-15, No. 106, Section 2, Heping East Road, Taipei City
                </li>
                <li class="landing_contact_item" data-txt="Tel：">(02)2737-7769</li>
                <li class="landing_contact_item" data-txt="Fax：">Fax：(02)2737-7836</li>
                <li class="landing_contact_item" data-txt="Email：">
                    <a href="mailto:medpilot@narlabs.org.tw">medpilot@narlabs.org.tw</a>
                </li>
                <li class="landing_contact_item _privacy">
                    Privacy and Information Security Policy
                </li>
            </ul>
        </div>
    </div>
</template>


<script>

export default {
    data() {
        return {};
    },
    components: {},
    mounted() { },
    methods: {
    }
}
</script>