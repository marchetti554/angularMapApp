import { Component, OnInit } from '@angular/core';

declare var google: any;

declare function updateMap();

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})

export class MapComponent implements OnInit {

  constructor() { 
  }

  ngOnInit() {
    google.charts.load(
      'current',
      { packages: ['controls', 'geochart'],
    mapsApiKey: 'AIzaSyAIc66IKUoMa0bkwrcLNaKHnOJSl7Gh3dw' }
    ).then(function () {
      var data = google.visualization.arrayToDataTable([
			    ['Country', 'Popularity'],
				['Afghanistan', 100],	 //	AF
				['Åland Islands', 100],	 //	AX
				['Albania', 100],	 //	AL
				['Algeria', 100],	 //	DZ
				['American Samoa', 100],	 //	AS
				['Andorra', 100],	 //	AD
				['Angola', 100],	 //	AO
				['Anguilla', 100],	 //	AI
				['Antarctica', 100],	 //	AQ
				['Antigua and Barbuda', 100],	 //	AG
				['Argentina', 100],	 //	AR
				['Armenia', 100],	 //	AM
				['Aruba', 100],	 //	AW
				['Australia', 100],	 //	AU
				['Austria', 100],	 //	AT
				['Azerbaijan', 100],	 //	AZ
				['Bahamas', 100],	 //	BS
				['Bahrain', 100],	 //	BH
				['Bangladesh', 100],	 //	BD
				['Barbados', 100],	 //	BB
				['Belarus', 100],	 //	BY
				['Belgium', 100],	 //	BE
				['Belize', 100],	 //	BZ
				['Benin', 100],	 //	BJ
				['Bermuda', 100],	 //	BM
				['Bhutan', 100],	 //	BT
				['BO', 100],	 //	BO
				['Bonaire, Sint Eustatius and Saba', 100],	 //	BQ
				['Bosnia and Herzegovina', 100],	 //	BA
				['Botswana', 100],	 //	BW
				['Bouvet Island', 100],	 //	BV
				['Brazil', 100],	 //	BR
				['British Indian Ocean Territory', 100],	 //	IO
				['Brunei Darussalam', 100],	 //	BN
				['Bulgaria', 100],	 //	BG
				['Burkina Faso', 100],	 //	BF
				['Burundi', 100],	 //	BI
				['Cabo Verde', 100],	 //	CV
				['Cambodia', 100],	 //	KH
				['Cameroon', 100],	 //	CM
				['Canada', 100],	 //	CA
				['Cayman Islands', 100],	 //	KY
				['Central African Republic', 100],	 //	CF
				['Chad', 100],	 //	TD
				['Chile', 100],	 //	CL
				['China', 100],	 //	CN
				['Christmas Island', 100],	 //	CX
				['Cocos (Keeling) Islands', 100],	 //	CC
				['Colombia', 100],	 //	CO
				['Comoros', 100],	 //	KM
				['Congo', 100],	 //	CG
				['Congo (Democratic Republic of the)', 100],	 //	CD
				['Cook Islands', 100],	 //	CK
				['Costa Rica', 100],	 //	CR
				['Côte d\'Ivoire', 100],	 //	CI
				['Croatia', 100],	 //	HR
				['Cuba', 100],	 //	CU
				['Curaçao', 100],	 //	CW
				['Cyprus', 100],	 //	CY
				['Czechia', 100],	 //	CZ
				['Denmark', 100],	 //	DK
				['Djibouti', 100],	 //	DJ
				['Dominica', 100],	 //	DM
				['Dominican Republic', 100],	 //	DO
				['Ecuador', 100],	 //	EC
				['Egypt', 100],	 //	EG
				['El Salvador', 100],	 //	SV
				['Equatorial Guinea', 100],	 //	GQ
				['Eritrea', 100],	 //	ER
				['Estonia', 100],	 //	EE
				['Ethiopia', 100],	 //	ET
				['Falkland Islands (Malvinas)', 100],	 //	FK
				['Faroe Islands', 100],	 //	FO
				['Fiji', 100],	 //	FJ
				['Finland', 100],	 //	FI
				['France', 100],	 //	FR
				['French Guiana', 100],	 //	GF
				['French Polynesia', 100],	 //	PF
				['French Southern Territories', 100],	 //	TF
				['Gabon', 100],	 //	GA
				['Gambia', 100],	 //	GM
				['Georgia', 100],	 //	GE
				['Germany', 100],	 //	DE
				['Ghana', 100],	 //	GH
				['Gibraltar', 100],	 //	GI
				['Greece', 100],	 //	GR
				['Greenland', 100],	 //	GL
				['Grenada', 100],	 //	GD
				['Guadeloupe', 100],	 //	GP
				['Guam', 100],	 //	GU
				['Guatemala', 100],	 //	GT
				['Guernsey', 100],	 //	GG
				['Guinea', 100],	 //	GN
				['Guinea-Bissau', 100],	 //	GW
				['Guyana', 100],	 //	GY
				['Haiti', 100],	 //	HT
				['Heard Island and McDonald Islands', 100],	 //	HM
				['Holy See', 100],	 //	VA
				['Honduras', 100],	 //	HN
				['Hong Kong', 100],	 //	HK
				['Hungary', 100],	 //	HU
				['Iceland', 100],	 //	IS
				['India', 100],	 //	IN
				['Indonesia', 100],	 //	ID
				['Iran (Islamic Republic of)', 100],	 //	IR
				['Iraq', 100],	 //	IQ
				['Ireland', 100],	 //	IE
				['Isle of Man', 100],	 //	IM
				['Israel', 100],	 //	IL
				['Italy', 100],	 //	IT
				['Jamaica', 100],	 //	JM
				['Japan', 100],	 //	JP
				['Jersey', 100],	 //	JE
				['Jordan', 100],	 //	JO
				['Kazakhstan', 100],	 //	KZ
				['Kenya', 100],	 //	KE
				['Kiribati', 100],	 //	KI
				['Korea (Democratic People\'s Republic of)', 100],	 //	KP
				['Korea (Republic of)', 100],	 //	KR
				['Kuwait', 100],	 //	KW
				['Kyrgyzstan', 100],	 //	KG
				['Lao People\'s Democratic Republic', 100],	 //	LA
				['Latvia', 100],	 //	LV
				['Lebanon', 100],	 //	LB
				['Lesotho', 100],	 //	LS
				['Liberia', 100],	 //	LR
				['Libya', 100],	 //	LY
				['Liechtenstein', 100],	 //	LI
				['Lithuania', 100],	 //	LT
				['Luxembourg', 100],	 //	LU
				['Macao', 100],	 //	MO
				['Macedonia (the former Yugoslav Republic of)', 100],	 //	MK
				['Madagascar', 100],	 //	MG
				['Malawi', 100],	 //	MW
				['Malaysia', 100],	 //	MY
				['Maldives', 100],	 //	MV
				['Mali', 100],	 //	ML
				['Malta', 100],	 //	MT
				['Marshall Islands', 100],	 //	MH
				['Martinique', 100],	 //	MQ
				['Mauritania', 100],	 //	MR
				['Mauritius', 100],	 //	MU
				['Mayotte', 100],	 //	YT
				['Mexico', 100],	 //	MX
				['Micronesia (Federated States of)', 100],	 //	FM
				['Moldova (Republic of)', 100],	 //	MD
				['Monaco', 100],	 //	MC
				['Mongolia', 100],	 //	MN
				['Montenegro', 100],	 //	ME
				['Montserrat', 100],	 //	MS
				['Morocco', 100],	 //	MA
				['Mozambique', 100],	 //	MZ
				['Myanmar', 100],	 //	MM
				['Namibia', 100],	 //	NA
				['Nauru', 100],	 //	NR
				['Nepal', 100],	 //	NP
				['Netherlands', 100],	 //	NL
				['New Caledonia', 100],	 //	NC
				['New Zealand', 100],	 //	NZ
				['Nicaragua', 100],	 //	NI
				['Niger', 100],	 //	NE
				['Nigeria', 100],	 //	NG
				['Niue', 100],	 //	NU
				['Norfolk Island', 100],	 //	NF
				['Northern Mariana Islands', 100],	 //	MP
				['Norway', 100],	 //	NO
				['Oman', 100],	 //	OM
				['Pakistan', 100],	 //	PK
				['Palau', 100],	 //	PW
				['Palestine, State of', 100],	 //	PS
				['Panama', 100],	 //	PA
				['Papua New Guinea', 100],	 //	PG
				['Paraguay', 100],	 //	PY
				['Peru', 100],	 //	PE
				['Philippines', 100],	 //	PH
				['Pitcairn', 100],	 //	PN
				['Poland', 100],	 //	PL
				['Portugal', 100],	 //	PT
				['Puerto Rico', 100],	 //	PR
				['Qatar', 100],	 //	QA
				['Réunion', 100],	 //	RE
				['Romania', 100],	 //	RO
				['RU', 100],	 //	RU
				['Rwanda', 100],	 //	RW
				['Saint Barthélemy', 100],	 //	BL
				['Saint Helena, Ascension and Tristan da Cunha', 100],	 //	SH
				['Saint Kitts and Nevis', 100],	 //	KN
				['Saint Lucia', 100],	 //	LC
				['Saint Martin (French part)', 100],	 //	MF
				['Saint Pierre and Miquelon', 100],	 //	PM
				['Saint Vincent and the Grenadines', 100],	 //	VC
				['Samoa', 100],	 //	WS
				['San Marino', 100],	 //	SM
				['Sao Tome and Principe', 100],	 //	ST
				['Saudi Arabia', 100],	 //	SA
				['Senegal', 100],	 //	SN
				['Serbia', 100],	 //	RS
				['Seychelles', 100],	 //	SC
				['Sierra Leone', 100],	 //	SL
				['Singapore', 100],	 //	SG
				['Sint Maarten (Dutch part)', 100],	 //	SX
				['Slovakia', 100],	 //	SK
				['Slovenia', 100],	 //	SI
				['Solomon Islands', 100],	 //	SB
				['Somalia', 100],	 //	SO
				['South Africa', 100],	 //	ZA
				['South Georgia and the South Sandwich Islands', 100],	 //	GS
				['South Sudan', 100],	 //	SS
				['Spain', 100],	 //	ES
				['Sri Lanka', 100],	 //	LK
				['Sudan', 100],	 //	SD
				['Suriname', 100],	 //	SR
				['Svalbard and Jan Mayen', 100],	 //	SJ
				['Swaziland', 100],	 //	SZ
				['Sweden', 100],	 //	SE
				['Switzerland', 100],	 //	CH
				['Syrian Arab Republic', 100],	 //	SY
				['Taiwan, Province of China[a]', 100],	 //	TW
				['Tajikistan', 100],	 //	TJ
				['Tanzania, United Republic of', 100],	 //	TZ
				['Thailand', 100],	 //	TH
				['Timor-Leste', 100],	 //	TL
				['Togo', 100],	 //	TG
				['Tokelau', 100],	 //	TK
				['Tonga', 100],	 //	TO
				['Trinidad and Tobago', 100],	 //	TT
				['Tunisia', 100],	 //	TN
				['Turkey', 100],	 //	TR
				['Turkmenistan', 100],	 //	TM
				['Turks and Caicos Islands', 100],	 //	TC
				['Tuvalu', 100],	 //	TV
				['Uganda', 100],	 //	UG
				['Ukraine', 100],	 //	UA
				['United Arab Emirates', 100],	 //	AE
				['GB', 100],	 //	GB
				['US', 100],	 //	US
				['United States Minor Outlying Islands', 100],	 //	UM
				['Uruguay', 100],	 //	UY
				['Uzbekistan', 100],	 //	UZ
				['Vanuatu', 100],	 //	VU
				['Venezuela (Bolivarian Republic of)', 100],	 //	VE
				['Viet Nam', 100],	 //	VN
				['Virgin Islands (British)', 100],	 //	VG
				['Virgin Islands (U.S.)', 100],	 //	VI
				['Wallis and Futuna', 100],	 //	WF
				['Western Sahara', 100],	 //	EH
				['Yemen', 100],	 //	YE
				['Zambia', 100],	 //	ZM
				['Zimbabwe', 100]	 //	ZW
			]);
      
      var view = new google.visualization.DataView(data);
      view.setColumns([0, 1]);
    
      var GeoChart = new google.visualization.ChartWrapper({
        chartType: 'GeoChart',
        containerId: 'regions_div',
        dataTable: view
	  });


		google.visualization.events.addListener(GeoChart, 'ready', function () {
			google.visualization.events.addListener(GeoChart.getChart(), 'select', function () {
				var selection = GeoChart.getChart().getSelection();
				if (selection.length > 0) {
					if (data.getValue(selection[0].row, 1) == 100) {
						data.setValue(selection[0].row, 1, 0);
					} else {
						data.setValue(selection[0].row, 1, 100);
					}
				}
				GeoChart.draw();
			});
		});

		GeoChart.draw();
	});
	}
}
