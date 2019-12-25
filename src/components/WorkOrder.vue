<template>
	<div class="container-fluid work-order">
		<div class="row">
			<div class="col-md-5">
				<ul class="nav nav-tabs" id="myTab" role="tablist">
					<li class="nav-item">
						<a class="nav-link active" id="new-wo-tab" data-toggle="tab" href="#" role="tab" aria-controls="new-wo" aria-selected="true">New WO.</a>
					</li>
				</ul>
				<div class="tab-content py-2" id="firstTabContent">
					<div class="tab-pane fade show active" id="new-wo" role="tabpanel" aria-labelledby="new-wo-tab">
						<form>
							<div class="row">
								<div class="form-group col-sm-6">
									<label>Company</label>
									<select 
										class="form-control parameters-input"
										v-model="new_wo.company">
										<option v-for="(company, index) in companyList" :value="company" :key="index">{{ company }}</option>
									</select>
								</div>
								<div class="form-group col-sm-6">
									<label>Pilicy</label>
									<input v-model="new_wo.policy" class="form-control" />
								</div>
							</div>
							<div class="row">
								<div class="form-group col-sm-6">
									<label>Customer</label>
									<input v-model="new_wo.customer" class="form-control" />
								</div>
								<div class="form-group col-sm-6">
									<label>Contract</label>
									<input v-model="new_wo.contract" class="form-control" />
								</div>
							</div>
							<div class="row">
								<div class="form-group col-sm-6">
									<label>Address note</label>
									<input v-model="new_wo.address_note" class="form-control" />
								</div>
								<div class="form-group col-sm-6">
									<label>S/Fee</label>
									<div>
										<span class="span-s-fee">{{ new_wo.s_fee }}</span>
										<button class="float-right btn-save"><i class="fa fa-save"></i></button>
									</div>
								</div>
							</div>
							<div class="row">
								<div class="form-group col-sm-3">
									<label>Bldg</label>
									<input v-model="new_wo.bldg" class="form-control" />
								</div>
								<div class="form-group col-sm-3">
									<label>Dir</label>
									<select 
										class="form-control parameters-input"
										v-model="new_wo.dir">
											<option v-for="(dir, index) in dirList" :value="dir" :key="index">{{ dir }}</option>
									</select>
								</div>
								<div class="form-group col-sm-6">
									<label>Street</label>
									<input v-model="new_wo.street" class="form-control" />
								</div>
								<div class="form-group col-sm-3">
									<label>Type</label>
									<select 
										class="form-control parameters-input"
										v-model="new_wo.type">
											<option v-for="(type, index) in typeList" :value="type" :key="index">{{ type }}</option>
									</select>
								</div>
								<div class="form-group col-sm-3">
									<label>Apt</label>
									<input v-model="new_wo.apt" class="form-control" />
								</div>
								<div class="form-group col-sm-6">
									<label>Zip/City</label>
									<input v-model="new_wo.zip_city" class="form-control" />
								</div>
							</div>
							<div class="row mx-1 py-2 bg-special">
								<div class="icon-span">
									<span class="form-control mb-1"><i class="fa fa-phone-square"></i></span>
									<span class="form-control mb-1"><i class="fa fa-phone-volume"></i></span>
									<span class="form-control mb-1"><i class="fab fa-algolia"></i></span>
									<span class="form-control mb-1"><i class="fa fa-envelope"></i></span>
								</div>
								<div class="right-add">
									<div class="form-inline mb-1" v-for="(item, index) in new_wo.phone_info" :key="index">
										<a v-if="index == new_wo.phone_info.length-1" class="mx-2" @click="addNewPhone()"><i class="fa fa-plus"></i></a>
										<input v-model="item.value" class="form-control mx-2"/>
										<input v-model="item.desc" class="form-control mx-2"/>
										<select 
											class="form-control parameters-input mx-2"
											v-model="item.type">
												<option v-for="(phone_type, index) in phoneTypeList" :value="phone_type" :key="index">{{ phone_type }}</option>
										</select>
									</div>
								</div>
							</div>
						</form>
					</div>
				</div>
				<ul class="nav nav-tabs mt-3" id="myTab-2" role="tablist">
					<li class="nav-item">
						<a class="nav-link active" id="air-condition-tab" data-toggle="tab" href="#" role="tab" aria-controls="air-condition" aria-selected="true">Air Conditioner</a>
					</li>
				</ul>
				<div class="tab-content py-2" id="secondTabContent">
					<div class="tab-pane fade show active" id="air-condition" role="tabpanel" aria-labelledby="air-condition-tab">
						<form>
							<div class="row">
								<div class="col-sm-6">
									<div class="form-group row mx-0">
										<label class="col-sm-4 text-right mt-2">Appliance</label>
										<select 
											class="form-control parameters-input col-sm-8"
											v-model="air_condition.appliance">
												<option v-for="(appliance, index) in applianceList" :value="appliance" :key="index">{{ appliance }}</option>
										</select>
									</div>
									<div class="form-group row mx-0">
										<label class="col-sm-4 text-right mt-2">Brand</label>
										<input v-model="air_condition.brand" class="form-control col-sm-8"/>
									</div>
									<div class="form-group row mx-0">
										<label class="col-sm-4 text-right mt-2">Model</label>
										<input v-model="air_condition.model" class="form-control col-sm-8"/>
									</div>
									<div class="form-group row mx-0">
										<label class="col-sm-4 text-right mt-2">Serial</label>
										<input v-model="air_condition.serial" class="form-control col-sm-8"/>
									</div>
								</div>
								<div class="col-sm-6">
									<div class="form-group row mx-0">
										<label class="col-sm-4 text-right mt-2">Purchased</label>
										<div class="col-sm-8">
											<input type="date" v-model="air_condition.purchased" class="form-control"/>
										</div>
									</div>
									<div class="form-group row mx-0">
										<label class="col-sm-4 text-right mt-2">Location</label>
										<input v-model="air_condition.location" class="form-control col-sm-8"/>
									</div>
									<div class="form-group row mx-0">
										<label class="col-sm-4 text-right mt-2">Power</label>
										<input v-model="air_condition.power" class="form-control col-sm-8"/>
									</div>
									<div class="form-group row mx-0">
										<label class="col-sm-4 text-right mt-2">Style</label>
										<input v-model="air_condition.style" class="form-control col-sm-8"/>
									</div>
								</div>
							</div>
							<div class="row">
								<div class="form-group col-sm-6">
									<label>Reason</label>
									<select 
										class="form-control parameters-input"
										v-model="air_condition.reason">
											<option v-for="(reason, index) in reasonList" :value="reason" :key="index">{{ reason }}</option>
									</select>
								</div>
								<div class="form-group col-sm-6">
									<label>Note</label>
									<input v-model="air_condition.note" class="form-control"/>
								</div>
								<div class="form-group col-sm-6">
									<label>Dealer</label>
									<select 
										class="form-control parameters-input"
										v-model="air_condition.dealer">
											<option v-for="(dealer, index) in dealerList" :value="dealer" :key="index">{{ dealer }}</option>
									</select>
								</div>
								<div class="form-group col-sm-6">
									<div class="row select-span">
										<span class="col">Inst</span>
										<span class="col">SS</span>
										<span class="col">CB</span>
										<span class="col">TN</span>
									</div>
								</div>
							</div>
							<div class="row">
								<div class="col-12">
									<a @click="addNewProblem()" class="mx-2"><i class="fa fa-plus"></i></a>
									<label>Problems</label>
								</div>
							</div>
							<div class="row">
								<div class="col-12 form-group" v-for="(problem, index) in air_condition.problems" :key="index">
									<input v-model="problem.value" class="form-control" />
								</div>
							</div>
						</form>
					</div>
				</div>
				<ul class="nav nav-tabs mt-3" id="myTab-3" role="tablist">
					<li class="nav-item">
						<a class="nav-link active" id="notes-tab" data-toggle="tab" href="#notes" role="tab" aria-controls="notes" aria-selected="true">Notes</a>
					</li>
				</ul>
				<div class="tab-content py-2" id="thirdTabContent">
					<div class="tab-pane fade show active" id="notes" role="tabpanel" aria-labelledby="notes-tab">
						<form>
							<div class="row">
								<div class="col-12 form-group left-icon-with-input" v-for="(note, index) in notes" :key="index">
									<a v-if="index == notes.length-1" @click="addNewNote()" class="mx-2"><i class="fa fa-plus"></i></a>
									<input v-model="note.value" class="form-control" />
								</div>
							</div>
						</form>
					</div>
				</div>
			</div>
			<div class="col-md-7">
				<div class="row mx-0">
					<div class="calendar-main-status border-bottom border-dark">
						<div class="form-group m-0">
							<input type="date" class="form-control" />
						</div>
					</div>
					<div class="calendar-detail-status">
						<div class="row mx-0">
							<div class="col-4 header-status">
								<span>8-12</span>
							</div>
							<div class="col-8 header-status">
								<span>12-6</span>
							</div>
						</div>
					</div>
				</div>
				<div class="row border-bottom border-dark mx-0">
					<div class="calendar-main-status p-1">
						<div class="right-name p-1">
							Akmal Kayumov
						</div>
						<div class="right-status p-1">
							<div class="status-bar active my-1"></div>
							<div class="status-number">4(4)</div>
						</div>
						<div class="right-status p-1">
							<div class="status-bar active my-1"></div>
							<div class="status-number">5(5)</div>
						</div>
					</div>
					<div class="calendar-detail-status">
						<div class="row">
							<div class="col-4">
								<div class="right-button normal">
									<div class="top-string">91362 Thousand Oaks</div>
									<div class="down-string">Washer</div>
									<div class="number-string">2</div>
								</div>
							</div>
							<div class="col-8">
							</div>
						</div>
						<div class="row border-bottom">
							<div class="col-12">
								<div class="right-button btn-orange not-working">
									Vacation / Not working
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="row border-bottom border-dark mx-0">
					<div class="calendar-main-status p-1">
						<div class="right-name p-1">
							Alexander Vasilyev
						</div>
						<div class="right-status p-1">
							<div class="status-bar active my-1"></div>
							<div class="status-number">3(3)</div>
						</div>
						<div class="right-status p-1">
							<div class="status-bar active my-1"></div>
							<div class="status-number">3(3)</div>
						</div>
					</div>
					<div class="calendar-detail-status">
						<div class="row">
							<div class="col-4">
								<div class="right-button normal">
									<div class="top-string">91302 Calabasas</div>
									<div class="down-string">Refrigerator</div>
								</div>
								<div class="right-button normal">
									<div class="top-string">91302 Calabasas</div>
									<div class="down-string">Refrigerator</div>
								</div>
								<div class="right-button normal">
									<div class="top-string">90265 Malibu</div>
									<div class="down-string">Refrigerator</div>
								</div>
							</div>
							<div class="col-8">
								<div class="right-button normal">
									<div class="top-string">91302 Calabasas</div>
									<div class="down-string">Refrigerator</div>
									<div class="number-string">3</div>
								</div>
								<div class="right-button normal">
									<div class="top-string">91302 Malibu</div>
									<div class="down-string">Refrigerator</div>
								</div>
								<div class="right-button btn-white">
									<div class="top-string">91364 Woodland Hills</div>
									<div class="down-string">Refrigerator</div>
								</div>
								<div class="right-button btn-white">
									<div class="left-icon"><i class="fa fa-print"></i></div>
									<div class="top-string">91364 Woodland Hills</div>
									<div class="down-string">Refrigerator</div>
								</div>
							</div>
						</div>
						
					</div>
				</div>
				<div class="row border-bottom border-dark mx-0">
					<div class="calendar-main-status p-1">
						<div class="right-name p-1">
							Arnold Khachaturyan
						</div>
						<div class="right-status p-1">
							<div class="status-bar active my-1"></div>
							<div class="status-number">2(2)</div>
						</div>
						<div class="right-status p-1">
							<div class="status-bar active my-1"></div>
							<div class="status-number">3(3)</div>
						</div>
					</div>
					<div class="calendar-detail-status">
						<div class="row">
							<div class="col-4">
								<div class="right-button normal">
									<div class="top-string">93021 Moorpark</div>
									<div class="down-string">Refrigerator</div>
									<div class="number-string">5</div>
								</div>
							</div>
							<div class="col-8">
								<div class="right-button btn-indigo">
									<div class="top-string">91324 Northridge</div>
									<div class="down-string">Refrigerator</div>
								</div>
								<div class="right-button btn-indigo">
									<div class="left-icon"><i class="fa fa-print"></i></div>
									<div class="top-string">91335 Reseda</div>
									<div class="down-string">Refrigerator</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
export default {
	data() {
		return {
			new_wo: {
				company: '',
				policy: '',
				customer: '',
				contract: '',
				address_note: '',
				s_fee: '$0.00',
				bldg: '',
				dir: '',
				street: '',
				type: '',
				apt: '',
				zip_city: '',
				phone_info:[
					{
						value: '',
						desc:'',
						type: ''
					}
				]
			},
			companyList: [
				'company1',
				'company2'
			],
			dirList: [
				'dir1',
				'dir2'
			],
			typeList: [
				'type1',
				'type2'
			],
			phoneTypeList: [
				'Home',
				'Office'
			],
			air_condition: {
				appliance: '',
				brand: '',
				model: '',
				serial: '',
				purchased: '',
				location: '',
				power: '',
				style: '',
				reason: '',
				note: '',
				dealer: '',
				problems: [
					{ value: '' }
				]
			},
			applianceList: [
				'appliance1',
				'appliance2'
			],
			reasonList: [
				'reason1',
				'reason2'
			],
			dealerList: [
				'dealer1',
				'dealer2'
			],
			notes: [
				{
					value: ''
				}
			],
			dataList: [
				
			]
		}
	},
	methods: {
		addNewPhone() {
			this.new_wo.phone_info.push({
				value: '',
				desc:'',
				type: ''
			})
		},
		addNewProblem() {
			this.air_condition.problems.push({
				value: ''
			})
		},
		addNewNote() {
			this.notes.push({
				value: ''
			})
		},
	},
}
</script>
<style lang="scss" scoped>
	.work-order	{
		background: #fff;
	}
	#myTab, #myTab-2, #myTab-3 {
		.nav-link {
			&.active {
				background-color: #eee;
				border-color: #eee;
			}
		}
	}
	#firstTabContent {
		border: 1px solid #dee2e6;
		border-radius: 0.25rem;
		padding: 15px;
		border-top: 0;
		background-color: #eee;
	}
	#secondTabContent {
		border: 1px solid #dee2e6;
		border-radius: 0.25rem;
		padding: 15px;
		border-top: 0;
		background-color: #eee;
	}
	#thirdTabContent {
		border: 1px solid #dee2e6;
		border-radius: 0.25rem;
		padding: 15px;
		border-top: 0;
		background-color: #eee;
	}
	.span-s-fee {
		background: #f66d9b;
		padding: 5px 20px;
		line-height: 2.5rem;
	}
	.btn-save {
		font-size: 1.5rem;
		color: #686868;
	}
	.icon-span { 
		width: 60px;
		text-align: center;
		margin-left: 15px;
		i {
			font-size: 1.5rem;
			line-height: 1.5rem
		}
	}
	.right-add {
		margin-left: 15px;
	}
	.select-span {
		text-align: center;
		margin-top: 2.5rem
	}
	.left-icon-with-input {
		a {
			line-height: 2.5rem;
		}
		input {
			width: calc( 100% - 30px );
			float: right;
		}
	}
	.calendar-main-status {
		background: #ddd;
		width: 170px;
		float: left;
		.right-name {
			background-color: #e3342f;
			color: white;
		}
		.right-status {
			line-height: 2rem;
			.status-bar {
				width: 100px;
				height: 25px;
				float: left;
				&.active {
					background-image: linear-gradient( #38c172,white, #38c172);
				}
			}
			.status-number {
				float: right;
			}
		}
	}
	.calendar-detail-status {
		width: calc( 100% - 170px );
		text-align: center;
		line-height: 2.5rem;
		background-color: #eee;
		.header-status {
			background-color: #aaa;
			border-right: 1px solid #eee;
		}
		.right-button {
			background: #ddd;
			position: relative;
			border-radius: 20px;
			height: 40px;
			padding: 5px;
			margin: 5px;

			.top-string {
				line-height: 1rem;
				text-decoration: underline;
				font-weight: bold;
			}
			.down-string {
				line-height: 1rem;
			}
			.number-string {
				position: absolute;
				right: 10px;
				margin-top: -37px;
				color: yellow;
			}
			&.btn-white {
				background: white;
			}
			&.btn-orange {
				background: #f6993f;
			}
			&.btn-indigo {
				background: #6574cd;
			}
			&.not-working {
				line-height: 2rem;
				font-size: 1.25rem;
			}
			.left-icon {
				position: absolute;
				margin-left: 10px;
				font-size: 1.5rem;
				color: #686868;
			}
		}
	}
	form {
		.form-control {
			line-height: 2rem;
			height: 2rem;
		}
		.form-group {
			margin-bottom: 0.25rem;
			label {
				margin-bottom: 0;
			}
		}
		
	}
	.bg-special {
		background-color: #ddd
	}
</style>