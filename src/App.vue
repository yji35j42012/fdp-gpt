<template>
	<div id="app" :class="['wrap', '_' + nowPage]" ref="wrap">

		<div :class="['header', nowPage == 'landing' ? '_landing' : '', headerBg ? '_on' : '']">
			<div :class="['header_title', nowPage == 'front' ? '_hand' : '']" @click="goHome">
				<div class="logo">
					<img src="./assets/images/logo.svg" alt="">
				</div>
				MEDPILOT
				<span v-if="nowPage == 'backend'" class="isBack">Backend</span>
			</div>

			<ul v-if="nowPage == 'landing'" class="menu">
				<li class="menu_li" @click="menuHandler('home')">Home</li>
				<li class="menu_li" @click="menuHandler('about')">About</li>
				<li class="menu_li" @click="menuHandler('highlights')">Highlights</li>
				<li class="menu_li" @click="menuHandler('products')">Products</li>
				<li class="menu_li" @click="menuHandler('team')">Team</li>
				<li class="menu_li" @click="menuHandler('contact')">Contact</li>
				<li class="menu_li _try">
					<router-link to="/front">Try it</router-link>
				</li>
				<li class="menu_li _btn"><button class="border_btn" @click="loginHndler">Login</button></li>
			</ul>

			<button v-if="nowPage == 'front'" @click="download" class="normal_btn _generate _download" disabled
				id="dow">Download</button>
			<div v-if="nowPage == 'front'" class="user">Member 0001</div>
		</div>

		<button :class="['gotop', headerBg ? '_on' : '']" v-if="nowPage == 'landing'" @click="gotopHandler" ref="gotop">
			<img src="./assets/images/icon_gotop.svg" alt="">
		</button>
		<router-view></router-view>

		<div class="alert _login" v-if="login.isShow">
			<div class="login_box">
				<button class="icon_btn _close" @click="closeLogin('login')"></button>
				<div class="login_title" v-if="!login.isForget">Login</div>
				<div class="login_title" v-if="login.isForget">Forget Password</div>

				<div class="login_forgetTxt" v-if="login.isForget">Please enter the email address you'd like your
					password reset information sent to</div>
				<div :class="['login_inp', login.isForget ? '_forget' : '']">
					Email
					<input type="text" placeholder="username@gmaial.com">
				</div>
				<div class="login_inp" v-if="!login.isForget">
					Password
					<input :type="login.isShowPw ? 'text' : 'password'" placeholder="Password">
					<button :class="['icon_btn', '_eye', login.isShowPw ? '_open' : '']" @click="showPass"></button>
				</div>
				<div class="login_inp" v-if="!login.isForget">
					<span class="login_forgot" @click="forgotHandler">Forgot Password?</span>
				</div>
				<button class="normal_btn _login" v-if="!login.isForget" @click="loginHandler">Login</button>
				<button class="normal_btn _login" v-if="login.isForget" @click="submitHandler">Submit</button>

				<div class="login_sigin" v-if="!login.isForget">
					Don't have an account? <span class="login_sigin_span" @click="signHandler">Sign in</span>
				</div>
			</div>
		</div>
		<div class="alert _sign" v-if="sign.isShow">
			<div class="alert_box">
				<button class="icon_btn _close" @click="closeLogin('sign')"></button>
				<div class="sign_title">Sign in</div>
				<div class="sign_info">
					<div class="sign_info_inp">
						<div :class="['login_inp', login.isForget ? '_forget' : '']">
							Email
							<input type="text" placeholder="username@gmaial.com">
						</div>
						<div :class="['login_inp', login.isForget ? '_forget' : '']">
							Name
							<input type="text" placeholder="username@gmaial.com">
						</div>
						<div class="login_inp" v-if="!login.isForget">
							Password
							<input :type="login.isShowPw ? 'text' : 'password'" placeholder="Password">
							<button :class="['icon_btn', '_eye', login.isShowPw ? '_open' : '']"
								@click="showPass"></button>
						</div>
						<div class="normal_sel" data-msg="Country">
							<div class="normal_sel_title">
								<select :style="sign.isNormal ? 'color: #777;' : ''" @change="changeLang">
									<option value="" selected hidden>Select country</option>
									<option v-for="country in countries" :key="country.alpha2Code"
										:value="country.alpha2Code" style="color:#000;">
										{{ country.name.common }}
									</option>
								</select>
							</div>
						</div>
					</div>
					<div class="sign_info_checkbox">
						<div class="sign_info_title">What kind of work do you do: <span class="wrong"
								v-if="sign.isKindWrong">Check at least one</span></div>
						<label class="normal_checkbox" v-for="(item, index) in sign.kind">
							<input class="normal_checkbox_inp" type="checkbox" :checked="item.isChecked"
								@change="kindCheck(index)">
							<div class="normal_checkbox_bg"></div>
							<div class="normal_checkbox_span"></div>
							<div class="normal_checkbox_txt">
								<span>{{ item.title }}</span>
								{{ item.txt }}
							</div>
						</label>
						<div class="other _flex">
							<label class="normal_checkbox">
								<input class="normal_checkbox_inp" type="checkbox" :checked="sign.kind_other.isChecked"
									@change="kindCheck(-99)">
								<div class="normal_checkbox_bg"></div>
								<div class="normal_checkbox_span"></div>
								<div class="normal_checkbox_txt">
									<span>Others:</span>
								</div>
							</label>
							<div :class="['other_textarea_box', sign.kind_other.isWrong ? '_showMsg' : '']"
								data-msg="Please fill out this fidld">
								<textarea :placeholder="sign.kind_other.pl"
									ref="kindtext">{{ sign.kind_other.text }}</textarea>
							</div>

						</div>
					</div>
					<div class="sign_info_checkbox">
						<div class="sign_info_title">Select a medical specialty：<span class="wrong"
								v-if="sign.isAreaWrong">Check at least one</span>
						</div>
						<div class="sign_info_radiobox">
							<label class="normal_radiobox">
								<input class="normal_radiobox_radio" type="radio" name="area" @change="areaChange('m')"
									checked>
								<span class="normal_radiobox_bg"></span>
								<span class="normal_radiobox_span"></span>
								<span class="normal_radiobox_arr"></span>
								<span class="normal_radiobox_txt">Medical equipment</span>
							</label>
							<label class="normal_radiobox">
								<input class="normal_radiobox_radio" type="radio" name="area" @change="areaChange('o')">
								<span class="normal_radiobox_bg"></span>
								<span class="normal_radiobox_span"></span>
								<span class="normal_radiobox_arr"></span>
								<span class="normal_radiobox_txt">Others</span>
							</label>
						</div>
						<div class="sign_area">
							<div class="sign_area_box">
								<label class="normal_checkbox" v-for="(item, index) in sign.area_m"
									v-if="sign.areaState == 'm'">
									<input class="normal_checkbox_inp" type="checkbox" :checked="item.isChecked"
										@change="areaMCheck(index)">
									<div class="normal_checkbox_bg"></div>
									<div class="normal_checkbox_span"></div>
									<div class="normal_checkbox_txt">{{ item.txt }}</div>
								</label>
								<label class="normal_checkbox" v-for="(item, index) in sign.area_o"
									v-if="sign.areaState == 'o'">
									<input class="normal_checkbox_inp" type="checkbox" :checked="item.isChecked"
										@change="areaOCheck(index)">
									<div class="normal_checkbox_bg"></div>
									<div class="normal_checkbox_span"></div>
									<div class="normal_checkbox_txt">{{ item.txt }}</div>
								</label>
								<div class="other">
									<label class="normal_checkbox">
										<input class="normal_checkbox_inp" type="checkbox" @change="areaMCheck(-99)">
										<div class="normal_checkbox_bg"></div>
										<div class="normal_checkbox_span"></div>
										<div class="normal_checkbox_txt _hasMsg"><span>Others:</span></div>
									</label>
									<div :class="['other_textarea_box', sign.area_other.isWrong ? '_showMsg' : '']"
										data-msg="Please fill out this fidld">
										<textarea :placeholder="sign.area_other.pl" ref="areatext"></textarea>
									</div>

								</div>
							</div>
							<div class="sign_area_box">
								<div class="sign_area_title">Intended Use：<span class="wrong"
										v-if="sign.isPurposeWrong">Check at least one</span></div>
								<label class="normal_checkbox" v-for="(item, index) in sign.purpose_m"
									v-if="sign.areaState == 'm'">
									<input class="normal_checkbox_inp" type="checkbox" :checked="item.isChecked"
										@change="purposeMCheck(index)">
									<div class="normal_checkbox_bg"></div>
									<div class="normal_checkbox_span"></div>
									<div class="normal_checkbox_txt">
										<span>{{ item.title }}</span>
										{{ item.txt }}
									</div>
								</label>
								<label class="normal_checkbox" v-for="(item, index) in sign.purpose_o"
									v-if="sign.areaState == 'o'">
									<input class="normal_checkbox_inp" type="checkbox" :checked="item.isChecked"
										@change="purposeOCheck(index)">
									<div class="normal_checkbox_bg"></div>
									<div class="normal_checkbox_span"></div>
									<div class="normal_checkbox_txt">
										<span>{{ item.title }}</span>
										{{ item.txt }}
									</div>
								</label>
								<div class="other">
									<label class="normal_checkbox">
										<input class="normal_checkbox_inp" type="checkbox" @change="purposeMCheck(-99)">
										<div class="normal_checkbox_bg"></div>
										<div class="normal_checkbox_span"></div>
										<div class="normal_checkbox_txt _hasMsg"><span>Others:</span></div>
									</label>
									<div :class="['other_textarea_box', sign.purpose_other.isWrong ? '_showMsg' : '']"
										data-msg="Please fill out this fidld">
										<textarea :placeholder="sign.purpose_other.pl" ref="purposetext"></textarea>
									</div>
								</div>
							</div>
							<div class="sign_area_box">
								<div class="sign_area_title">Purpose of registration：<span class="wrong"
										v-if="sign.isSignPurposeWrong">Check at least one</span></div>
								<label class="normal_checkbox" v-for="(item, index) in sign.purpose_sign">
									<input class="normal_checkbox_inp" type="checkbox" :checked="item.checked"
										@change="signPurposeCheck(index)">
									<div class="normal_checkbox_bg"></div>
									<div class="normal_checkbox_span"></div>
									<div class="normal_checkbox_txt">
										<span>{{ item.title }}</span>
										{{ item.txt }}
									</div>
								</label>
								<div class="other" style="display: none;">
									<label class="normal_checkbox">
										<input class="normal_checkbox_inp" type="checkbox"
											@change="signPurposeCheck(-99)">
										<div class="normal_checkbox_bg"></div>
										<div class="normal_checkbox_span"></div>
										<div class="normal_checkbox_txt"><span>Others:</span></div>
									</label>
									<div :class="['other_textarea_box', sign.signPurpose_other.isWrong ? '_showMsg' : '']"
										data-msg="Please fill out this fidld">
										<textarea :placeholder="sign.signPurpose_other.pl"
											ref="signPurposetext"></textarea>
									</div>

								</div>
							</div>
						</div>
					</div>

					<button class="normal_btn _login" @click="signSubmit">Submit</button>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import axios from 'axios'
// import VueAxios from 'vue-axios'
export default {
	data() {
		return {
			nowPage: "",
			scrollTime: "",
			headerBg: false,
			screenH: 0,
			login: {
				isShow: false,
				isForget: false,
				isShowPw: false
			},
			sign: {
				isNormal: true,
				isOther: false,
				isShow: false,
				isKindWrong: false,
				areaState: "m",
				kind: [
					{
						title: 'Doctor/Physician: ',
						txt: 'This includes various specialists such as internists, surgeons, pediatricians, etc.',
						isChecked: false
					},
					{
						title: 'Nurse/Nursing Staff: ',
						txt: 'This includes registered nurses, specialist nurses, and more',
						isChecked: false
					},
					{
						title: 'Pharmacist: ',
						txt: 'Professionals engaged in the dispensation of medication, drug management, and consultation',
						isChecked: false
					},
					{
						title: 'Researcher/Scientist: ',
						txt: 'Professionals involved in research in fields like medicine, biotechnology, chemistry, and others',
						isChecked: false
					},
					{
						title: 'Clinical Trial Coordinator: ',
						txt: 'Responsible for managing and coordinating the execution of clinical trials',
						isChecked: false
					},
					{
						title: 'Production/Quality Control Specialist: ',
						txt: 'Involved in the production and quality management of medical devices, pharmaceuticals, and other products',
						isChecked: false
					},
					{
						title: 'Regulatory Affairs Specialist: ',
						txt: 'Specializes in dealing with regulatory compliance issues, such as FDA regulatory compliance',
						isChecked: false
					},
					{
						title: 'Marketing/Sales Specialist: ',
						txt: 'In charge of marketing and selling medical products or services',
						isChecked: false
					},
					{
						title: 'Healthcare Consultant: ',
						txt: 'Provides professional consulting services in the medical and health sector',
						isChecked: false
					},
					{
						title: 'Administrative/Management Personnel: ',
						txt: 'Includes hospital administrators, department heads, etc',
						isChecked: false
					},
					{
						title: 'Student: ',
						txt: 'Students in medical school, nursing school, biotechnology, and related fields',
						isChecked: false
					},
				],
				kindCount: 0,
				kind_other: {
					isChecked: false,
					isWrong: false,
					pl: "Provides an option for users who do not fit into the above categories to specify their role.",
					text: '',
				},
				isAreaWrong: false,
				area_m: [
					{ title: '', isChecked: false, txt: 'Clinical Chemistry and Clinical Toxicology Devices' },
					{ title: '', isChecked: false, txt: 'Hematology and Pathology Devices' },
					{ title: '', isChecked: false, txt: 'Immunology and Microbiology Devices' },
					{ title: '', isChecked: false, txt: 'Anesthesiology Devices' },
					{ title: '', isChecked: false, txt: 'Cardiovascular Devices' },
					{ title: '', isChecked: false, txt: 'Dental Devices' },
					{ title: '', isChecked: false, txt: 'Ear, Nose, and Throat Devices' },
					{ title: '', isChecked: false, txt: 'Gastroenterology-Urology Devices' },
					{ title: '', isChecked: false, txt: 'General and Plastic Surgery Devices' },
					{ title: '', isChecked: false, txt: 'General Hospital and Personal Use Devices' },
					{ title: '', isChecked: false, txt: 'Neurological Devices' },
					{ title: '', isChecked: false, txt: 'Obstetrical and Gynecological Devices' },
					{ title: '', isChecked: false, txt: 'Ophthalmic Devices' },
					{ title: '', isChecked: false, txt: 'Orthopedic Devices ' },
					{ title: '', isChecked: false, txt: 'Physical Medicine Devices ' },
					{ title: '', isChecked: false, txt: 'Radiology Devices ' },
				],
				area_o: [
					{ title: '', isChecked: false, txt: 'Drugs: General' },
					{ title: '', isChecked: false, txt: 'Drugs for Human Use' },
					{ title: '', isChecked: false, txt: 'Animal Drugs, Feeds, and Related Products' },
					{ title: '', isChecked: false, txt: 'Biologics' },
					{ title: '', isChecked: false, txt: 'Cosmetics' },
					{ title: '', isChecked: false, txt: 'Medical Devices' },
				],
				area_other: {
					isChecked: false,
					isWrong: false,
					pl: "Provides an option for users who do not fit into the above categories to specify their role.",
					text: '',
				},
				area_mCount: 0,
				area_oCount: 0,
				isPurposeWrong: false,
				purpose_mCount: 0,
				purpose_oCount: 0,
				purpose_m: [
					{ title: 'Diagnostic Use: ', isChecked: false, txt: 'For the diagnosis or monitoring of diseases or conditions' },
					{ title: 'Therapeutic Use: ', isChecked: false, txt: 'For the treatment or management of diseases, including surgical adjunctive devices' },
					{ title: 'Prophylactic Use: ', isChecked: false, txt: 'For the prevention of the occurrence or worsening of diseases' },
					{ title: 'Functional Improvement or Support: ', isChecked: false, txt: 'For the enhancement or maintenance of bodily functions, such as devices aiding in mobility' },
					{ title: 'Personal Healthcare: ', isChecked: false, txt: 'For personal health monitoring or management, such as sphygmomanometers (blood pressure monitors).' },
					{ title: 'Medical Device Safety and Performance Evaluation: ', isChecked: false, txt: 'For ensuring the safe use and effective performance of medical devices' },
				],
				purpose_o: [
					{ title: 'New Drug or Ingredient Research: ', isChecked: false, txt: 'Investigation into the development and application of new pharmaceuticals or cosmetic ingredients' },
					{ title: 'Clinical Trials: ', isChecked: false, txt: 'Conducted on humans or animals to evaluate the safety and efficacy of medications and biologics' },
					{ title: 'Disease Treatment and Management: ', isChecked: false, txt: 'The development or use of drugs and biological products to treat specific diseases or conditions' },
					{ title: 'Disease Prevention: ', isChecked: false, txt: 'Includes vaccine development and drugs or biologics used for disease prevention' },
					{ title: 'Diagnostic Reagent Development: ', isChecked: false, txt: 'Creation of reagents or tools for disease diagnosis or health status monitoring' },
					{ title: 'Personalized Medicine: ', isChecked: false, txt: 'Treatment or diagnostic strategies based on individual genetic information or biomarkers' },
					{ title: 'Cosmetic Efficacy and Safety Assessment: ', isChecked: false, txt: 'Evaluation of cosmetic products for beautification effects and safety of use' },
					{ title: 'Animal Health and Nutrition: ', isChecked: false, txt: 'Development or use of veterinary drugs and feed additives to improve the health and nutritional status of animals' },
					{ title: 'Biotechnology Applications: ', isChecked: false, txt: 'Use of biotechnology in the development of pharmaceuticals, biologic products, or other applications' },
					{ title: 'Medical and Research Tool Development: ', isChecked: false, txt: 'Development of tools and equipment for medical research or clinical diagnostics' },
					{ title: 'Public Health and Disease Surveillance: ', isChecked: false, txt: 'Development or use of products to support public health monitoring and disease early warning systems' },
					{ title: 'Regulatory Compliance and Quality Control: ', isChecked: false, txt: 'Ensuring products meet relevant regulatory requirements, including quality control and safety assessment.' },
				],
				purpose_other: {
					isChecked: false,
					isWrong: false,
					pl: "Provides an option for users who do not fit into the above categories to specify their role.",
					text: '',
				},
				isSignPurposeWrong: false,
				signPurpose_Count: 0,
				purpose_sign: [
					{ title: 'Academic Research: ', isChecked: false, txt: 'Seeking information, collaborative opportunities, or sharing research findings.' },
					{ title: 'Professional Exchange: ', isChecked: false, txt: 'Engaging with peers to exchange experiences and discuss professional issues.' },
					{ title: 'Product Development: ', isChecked: false, txt: 'Searching for partnership opportunities or understanding market needs to develop new products.' },
					{ title: 'Market Marketing: ', isChecked: false, txt: 'Promoting products or services and understanding industry trends.' },
					{ title: 'Regulatory Compliance: ', isChecked: false, txt: 'Acquiring regulation and compliance information relevant to the FDA.' },
					{ title: 'Education and Training: ', isChecked: false, txt: 'Participating in professional training or accessing educational resources.' },
					{ title: 'Other: ', isChecked: false, txt: 'Allowing users to specify any other registration purpose.' },
				],
				signPurpose_other: {
					isChecked: false,
					isWrong: false,
					pl: "Provides an option for users who do not fit into the above categories to specify their role.",
					text: '',
				}
			},
			countries: [],
			selectedCountry: '',


		};
	},
	mounted() {
		var now = this.$route.path;
		if (now == "/") {
			this.nowPage = "landing";
		} else {
			this.nowPage = now.split("/")[1]
		}
		this.screenH = window.innerHeight
		this.$refs.wrap.addEventListener('scroll', this.scrollHandler)

	},
	watch: {
		$route(to, from) {
			var now = this.$route.path;
			if (now == "/" || now == "/landing") {
				this.nowPage = "landing";
			} else {
				this.nowPage = now.split("/")[1];
			}
		}
	},
	methods: {
		changeLang() {
			this.sign.isNormal = false
		},
		kindCheck(i) {
			if (i == -99) {
				this.sign.kind_other.isChecked = !this.sign.kind_other.isChecked
			} else {
				this.sign.kind[i].isChecked = !this.sign.kind[i].isChecked
				if (this.sign.kind[i].isChecked) {
					this.sign.kindCount++
				} else {
					this.sign.kindCount--
				}
			}
		},
		areaMCheck(i) {
			if (i == -99) {
				this.sign.area_other.isChecked = !this.sign.area_other.isChecked
			} else {
				this.sign.area_m[i].isChecked = !this.sign.area_m[i].isChecked
				if (this.sign.area_m[i].isChecked) {
					this.sign.area_mCount++
				} else {
					this.sign.area_mCount--
				}
			}
			console.log('area_mCount', this.sign.area_mCount);
		},
		areaOCheck(i) {
			if (i == -99) {
				this.sign.area_other.isChecked = !this.sign.area_other.isChecked
			} else {
				this.sign.area_o[i].isChecked = !this.sign.area_o[i].isChecked
				if (this.sign.area_o[i].isChecked) {
					this.sign.area_oCount++
				} else {
					this.sign.area_oCount--
				}
			}

			console.log('area_oCount', this.sign.area_oCount);
		},
		purposeMCheck(i) {
			if (i == -99) {
				this.sign.purpose_other.isChecked = !this.sign.purpose_other.isChecked
			} else {
				this.sign.purpose_m[i].isChecked = !this.sign.purpose_m[i].isChecked
				if (this.sign.purpose_m[i].isChecked) {
					this.sign.purpose_mCount++
				} else {
					this.sign.purpose_mCount--
				}
			}
		},
		purposeOCheck(i) {
			if (i == -99) {
				this.sign.purpose_other.isChecked = !this.sign.purpose_other.isChecked
			} else {
				this.sign.purpose_o[i].isChecked = !this.sign.purpose_o[i].isChecked
				if (this.sign.purpose_o[i].isChecked) {
					this.sign.purpose_oCount++
				} else {
					this.sign.purpose_oCount--
				}
			}
		},
		signPurposeCheck(i) {
			if (i == -99) {
				this.sign.signPurpose_other.isChecked = !this.sign.signPurpose_other.isChecked
			} else {
				this.sign.purpose_sign[i].isChecked = !this.sign.purpose_sign[i].isChecked
				if (this.sign.purpose_sign[i].isChecked) {
					this.sign.signPurpose_Count++
				} else {
					this.sign.signPurpose_Count--
				}
			}
		},
		signSubmit() {
			var signItem = this.sign
			var okCount = 0
			if (signItem.kindCount == 0 && !signItem.kind_other.isChecked) {
				signItem.isKindWrong = true
			} else if (signItem.kind_other.isChecked && this.$refs.kindtext.value == '') {
				signItem.isKindWrong = false
				signItem.kind_other.isWrong = true
			} else {
				signItem.isKindWrong = false
				signItem.kind_other.isWrong = false
				okCount++
			}
			if (this.sign.areaState == 'm' && signItem.area_mCount == 0 && !signItem.area_other.isChecked) {
				signItem.isAreaWrong = true;
			} else if (this.sign.areaState == 'o' && signItem.area_oCount == 0 && !signItem.area_other.isChecked) {
				signItem.isAreaWrong = true;
			} else if (signItem.area_other.isChecked && this.$refs.areatext.value == '') {
				signItem.isAreaWrong = false
				signItem.area_other.isWrong = true
			} else {
				signItem.isAreaWrong = false
				signItem.area_other.isWrong = false
				okCount++
			}
			if (this.sign.areaState == 'm' && signItem.purpose_mCount == 0 && !signItem.purpose_other.isChecked) {
				signItem.isPurposeWrong = true;
			} else if (this.sign.areaState == 'o' && signItem.purpose_oCount == 0 && !signItem.purpose_other.isChecked) {
				signItem.isPurposeWrong = true;
			} else if (signItem.purpose_other.isChecked && this.$refs.purposetext.value == '') {
				signItem.isPurposeWrong = false;
				signItem.purpose_other.isWrong = true
			} else {
				signItem.isPurposeWrong = false;
				signItem.purpose_other.isWrong = false
				okCount++
			}
			if (signItem.signPurpose_Count == 0 && !signItem.signPurpose_other.isChecked) {
				signItem.isSignPurposeWrong = true
			} else if (signItem.signPurpose_other.isChecked && this.$refs.kindtext.value == '') {
				signItem.isSignPurposeWrong = false
				signItem.signPurpose_other.isWrong = true
			} else {
				signItem.isSignPurposeWrong = false
				signItem.signPurpose_other.isWrong = false
				okCount++
			}


			if (okCount == 4) {
				console.log('成功');
				this.sign.isShow = false
			}
		},
		areaChange(s) {
			this.sign.areaState = s
		},
		async fetchCountries() {
			axios.get('https://restcountries.com/v3.1/all').then((response) => {
				this.countries = response.data.map(country => ({
					name: country.name,
					alpha2Code: country.cca2
				}));
			})
		},
		loginHndler() {
			this.login.isShow = true
			this.login.isForget = false
		},
		forgotHandler() {
			this.login.isForget = true
		},
		submitHandler() {
			this.login.isForget = false
		},
		loginHandler() {
			this.login.isShow = false
		},
		showPass() {
			this.login.isShowPw = !this.login.isShowPw
		},
		closeLogin(s) {
			switch (s) {
				case 'login':
					this.login.isShow = false
					break;
				case 'sign':
					this.sign.isShow = false
					break;
				default:
					break;
			}
		},
		signHandler() {
			this.fetchCountries();
			this.login.isShow = false
			this.sign.isShow = true
		},







		download() { },
		menuHandler(str) {
			clearInterval(this.scrollTime)
			var scrollT = document.querySelector('.wrap');
			var item = document.querySelector("#" + str).offsetTop;
			var totalH = document.querySelector(".landing").offsetHeight
			var lastH = document.querySelector(".landing_info:last-child").offsetHeight
			var mh = this.screenH > lastH ? totalH - this.screenH : totalH - lastH

			if (this.screenH !== window.innerHeight) {
				this.screenH = window.innerHeight
			}
			if (item > scrollT.scrollTop) {
				this.downScroll(scrollT, item, mh);
			} else {
				this.upScroll(scrollT, item);
			}
		},
		downScroll(sc, go, mh) {
			var count = 20
			this.scrollTime = setInterval(() => {
				sc.scrollTop += count
				if (sc.scrollTop >= mh) {
					clearInterval(this.scrollTime)
				}
				if (!this.headerBg && sc.scrollTop >= this.screenH - 60) {
					this.headerBg = true
				}
				if (sc.scrollTop >= go) {
					sc.scrollTop = go
					clearInterval(this.scrollTime)
				}
			}, 1);
		},
		upScroll(sc, go) {
			var count = 20
			this.scrollTime = setInterval(() => {
				sc.scrollTop -= count
				if (this.headerBg && sc.scrollTop < this.screenH - 60) {
					this.headerBg = false
				}
				if (sc.scrollTop <= go) {
					sc.scrollTop = go
					clearInterval(this.scrollTime)
				}
			}, 1);
		},
		scrollHandler() {
			var sc = this.$refs.wrap
			if (!this.headerBg && sc.scrollTop >= this.screenH - 60) {
				this.headerBg = true
			}
			if (this.headerBg && sc.scrollTop < this.screenH - 60) {
				this.headerBg = false
			}
		},
		gotopHandler() {
			var scrollT = document.querySelector('.wrap');
			this.upScroll(scrollT, 0)
		},
		goHome() {
			if (this.nowPage == 'front') {
				this.$router.push("/");
			}
		},

	}

}
</script>