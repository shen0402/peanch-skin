(function (window, k) {
    if (!window.AppstleIncluded && (!urlIsProductPage() || 'V1' === 'V2')) {
      window.AppstleIncluded = true;
      appstleLoadScript = function (src, callback) {
        var script = document.createElement("script");
        script.charset = "utf-8";
            script.defer = true;
        script.src = src;
        script.onload = script.onreadystatechange = function () {
          if (!script.readyState || /loaded|complete/.test(script.readyState)) {
            script.onload = script.onreadystatechange = null;
            script = k;
            callback && callback();
          }
        };
            document.getElementsByTagName("body")[0].appendChild(script)
      };


      appstleLoadScript("https://cdn.shopify.com/s/files/1/0646/0640/4840/t/9/assets/appstle-subscription.js?v=1671860872");


      window.RS = Window.RS || {};
      RS.Config = {
        "selectors": {
            "payment_button_selectors": "form[action$='/cart/add'] .shopify-payment-button",
            "subscriptionLinkSelector": "#MainContent > div > div:nth-child(2) > div:nth-child(2) > h2",
            "atcButtonPlacement": "BEFORE",
            "subscriptionLinkPlacement": "BEFORE",
            "cartRowSelector": "",
            "cartLineItemSelector": "",
            "cartLineItemPerQuantityPriceSelector": "",
            "cartLineItemTotalPriceSelector": "",
            "cartLineItemSellingPlanNameSelector": "",
            "cartSubTotalSelector" : "",
            "cartLineItemPriceSelector": "",
        },
        "enableCartWidgetFeature": "false",
        "useUrlWithCustomerId": "true",
        "atcButtonSelector": "div.product-form__buttons",
        "moneyFormat": "{% raw %}$ {{amount}}{% endraw %}",
        "oneTimePurchaseText": "Compra \u00FAnica",
        "shop": "peachmx.myshopify.com",
        "deliveryText": "delivery",
        "purchaseOptionsText": "Opci\u00F3n de compra:",
        "manageSubscriptionButtonText": "Manage Subscription",
        "subscriptionOptionText": "Suscr\u00EDbete y ahorra",
        "sellingPlanSelectTitle": "SUSCR\u00CDBETE Y AHORRA",
        "subscriptionPriceDisplayText": "Administrar suscripci\u00F3n",
        "tooltipTitle": "Detalle de la suscripci\u00F3n",
        "showTooltipOnClick": "false",
        "tooltipDesctiption": "Tienes control total sobre tus suscripciones.<br\/>\nPuedes editarlas, pausarlas y canecelarlas en el momento que t\u00FA quieras.",
        "tooltipDescriptionOnPrepaidPlan": "<b>Prepaid Plan Details<\/b><\/br> Total price: {{totalPrice}} ( Price for every cada uno: {{pricePerDelivery}})",
        "tooltipDescriptionOnMultipleDiscount": "<b>Discount Details<\/b><\/br> Initial discount is {{discountOne}} and then {{discountTwo}}",
        "tooltipDescriptionCustomization": "{{{defaultTooltipDescription}}} <\/br>  {{{prepaidDetails}}} <\/br> {{{discountDetails}}}",
        "orderStatusManageSubscriptionTitle": "Subscription",
        "orderStatusManageSubscriptionDescription": "Continue to your account to view and manage your subscriptions. Please use the same email address that you used to buy the subscription.",
        "orderStatusManageSubscriptionButtonText": "Manage your subscription",
        "subscriptionOptionSelectedByDefault" : false,
        "totalPricePerDeliveryText" : "{{prepaidPerDeliveryPrice}}\/cada uno",
        "memberOnlySellingPlansJson": {},
        "nonMemberOnlySellingPlansJson": {},
        "widgetEnabled": true,
        "showTooltip" : true,
        "sortByDefaultSequence": false,
        "showSubOptionBeforeOneTime": false,
        "showStaticTooltip": false,
        "showAppstleLink": false,
        "sellingPlanTitleText" : "{{sellingPlanName}} ({{sellingPlanPrice}}\/cada uno)",
        "oneTimePriceText" : "{{price}}",
        "selectedPayAsYouGoSellingPlanPriceText" : "{{price}}",
        "selectedPrepaidSellingPlanPriceText" : " {{totalPrice}}",
        "selectedDiscountFormat" : "SAVE {{selectedDiscountPercentage}}",
        "manageSubscriptionBtnFormat" : "<a href='apps\/subscriptions' class='appstle_manageSubBtn' ><button class='btn' style='padding: 2px 20px'>Manage Subscription<\/button><a><br><br>",
        "manageSubscriptionUrl" : "apps\/subscriptions",
        "appstlePlanId": 163,
        "showCheckoutSubscriptionBtn": true,
        "disableLoadingJquery": false,
        "widgetEnabledOnSoldVariant": "false",
        "switchRadioButtonWidget": true,
        "appstlePlanName": "BUSINESS",
        "appstlePlanFeatures": {
	"subscriptionOrderAmount": 30000.0,
	"analytics": true,
	"enableSubscriptionManagement": true,
	"enableDunningManagement": true,
	"enableCustomerPortalSettings": true,
	"enableShippingProfiles": true,
	"enableProductSwapAutomation": true,
	"enableAdvancedSellingPlans": true,
	"enableSummaryReports": true,
	"enableCustomEmailDomain": true,
	"enableWidgetPlacement": true,
	"enableIntegrations": true,
	"enableSmsAlert": false,
	"enableCustomEmailHtml": true,
	"enableCancellationManagement": true,
	"enableBundling": true,
	"enableAutomation": true,
	"enableQuickActions": false,
	"enableExternalApi": false,
	"enableCartWidget": true,
	"enableAutoSync": true,
	"webhookAccess": false,
	"accessWidgetDesignOptions": true,
	"accessSubscriptionActivityLogs": true,
	"accessBuildABox": true,
	"accessResendEmail": true,
	"accessKlaviyoContactSync": true,
	"accessOneTimeProductUpsells": true,
	"accessAdvanceSubscriptionPlanOptions": true,
	"accessSplitContract": true,
	"accessDiscountOnCancellationAttempt": true,
	"accessQuickCheckout": false,
	"accessSubscriberLoyaltyFeatures": true,
	"accessBundling": true,
	"accessManualSubscriptionCreation": true,
	"accessAppstleMenu": false
},
        "formMappingAttributeName": "",
        "formMappingAttributeSelector": "",
        "quickViewModalPollingSelector": "",
        "scriptLoadDelay": "0",
        "formatMoneyOverride": "false",
        "appstle_app_proxy_path_prefix": "apps\/subscriptions",
        "updatePriceOnQuantityChange": "",
        "widgetParentSelector": "",
        "quantitySelector": "",
        "enableAddJSInterceptor": "false",
        "reBuyEnabled": "false",
        "loyaltyDetailsLabelText": "",
        "loyaltyPerkDescriptionText": "",
        "widgetTemplateHtml": `{% raw %}<div class="appstle_sub_widget" id="appstle_subscription_widget{{widgetId}}">
      <div class="appstle_widget_title">{{{purchaseOptionsText}}}</div>
      <div class="appstle_subscription_wrapper">
        <div
          class="appstle_subscription_wrapper_option appstle_onetime_wrapper"
        >
          <input
            type="radio"
            checked=""
            id="appstle_selling_plan_label_1{{widgetId}}"
            name="selling_plan_wrapper"
            value=""
           class="appstle_selling_plan_wrapper appstle_onetime_radio"
          />
          <label
            for="appstle_selling_plan_label_1{{widgetId}}"
            class="appstle_radio_label"
          >
            <span class="appstle_circle"
              ><span class="appstle_dot"></span
            ></span>
            <span class="appstle_one_time_text">{{oneTimePuchaseText}}</span>
          </label>
          <span class="appstle_onetime_amount transcy-money">{{oneTimePuchaseAmount}}</span>
    <input type="radio" class="appstleSellingPlan{{widgetId}} appstleOneTimeInput"  value="" checked="" name="selling_plan" style="display: none;"/>
        </div>
        <div
          class="appstle_subscription_wrapper_option appstle_sellingplan_wrapper"
        >
<div>
          <div class="appstle_subscription_radio_wrapper">
            <input
              type="radio"
              id="appstle_selling_plan_label_2{{widgetId}}"
              name="selling_plan_wrapper"
              value="1209368768"
              class="appstle_selling_plan_wrapper appstle_sellingPlan_radio"
            />
            <label
              for="appstle_selling_plan_label_2{{widgetId}}"
              class="appstle_radio_label"
            >
              <span class="appstle_circle"
                ><span class="appstle_dot"></span
              ></span>
              <span class="appstle_subscribe_save_text"
                >{{subscribeText}}</span
              >
            </label>
            <div class="appstle_selectedSellingPlan_amount_wrapper">
              <span class="appstle_selectedSellingPlan_amount transcy-money"
                >$0.00</span
              >
            </div>
          </div>
          <div class="appstle_subscribe_option appstle_hide_subsOption">
            <label for="appstle_selling_plan{{widgetId}}" class="appstle_select_label"
              >{{{deliveryFrequencyText}}}</label
            >
			{{#multipleSellingPlan}}
            <div class="appstleRadioSellingPlanWrapper">
			{{#sellingPlanVariants}}
              <div>
                <label for="{{sellingPlanId}}" style="margin-top: 10px">
                  <input type="radio" class="appstleSellingPlan{{widgetId}} appstleSellingPlanInput" id="{{sellingPlanId}}" value="{{sellingPlanId}}" checked="" name="selling_plan" style="display: inline"/><span class="sellingplan">{{{sellingPlanDisplayText}}}</span>
                </label>
              </div>
			{{/sellingPlanVariants}}
            </div>
			{{/multipleSellingPlan}}
			{{^multipleSellingPlan}}
			 <div class="appstleRadioSellingPlanWrapper" style="display:none;">
			{{#sellingPlanVariants}}
              <div>
              <input type="radio" class="appstleSellingPlan{{widgetId}} appstleSellingPlanInput" id="{{sellingPlanId}}" value="{{sellingPlanId}}" checked="" name="selling_plan" style="display: inline"/>
                <label for="{{sellingPlanId}}" style="margin-top: 10px">
                 <span class="sellingplan">{{{sellingPlanDisplayText}}}</span>
                </label>
              </div>
			{{/sellingPlanVariants}}
            </div>
			<div class="appstle_single_option_text">{{{singleSellingPlanDisplayText}}}</div>
			{{/multipleSellingPlan}}
          </div>
        </div>
</div>
      </div>
{{#showStaticTooltip}}
<div class="appstle_tooltip_wrapper_static"> {{{toolTipDescription}}}</div>
{{/showStaticTooltip}}
{{^showStaticTooltip}}

<div data-appstle-icon="" class="appstle_tooltip_wrapper">
	  <svg width="90" height="90" viewBox="0 0 90 90" xmlns="http://www.w3.org/2000/svg" class="tooltip_subscription_svg">
		<path
		  d="M45 0C20.1827 0 0 20.1827 0 45C0 69.8173 20.1827 90 45 90C69.8173 90 90 69.8174 90 45C90.0056 44.6025 89.9322 44.2078 89.7839 43.8389C89.6357 43.47 89.4156 43.1342 89.1365 42.8511C88.8573 42.568 88.5247 42.3432 88.158 42.1897C87.7912 42.0363 87.3976 41.9573 87 41.9573C86.6024 41.9573 86.2088 42.0363 85.842 42.1897C85.4753 42.3432 85.1427 42.568 84.8635 42.8511C84.5844 43.1342 84.3643 43.47 84.2161 43.8389C84.0678 44.2078 83.9944 44.6025 84 45C84 66.5748 66.5747 84 45 84C23.4253 84 6 66.5747 6 45C6 23.4254 23.4253 6 45 6C56.1538 6 66.3012 10.5882 73.4375 18H65.4062C65.0087 17.9944 64.614 18.0678 64.2451 18.2161C63.8762 18.3643 63.5405 18.5844 63.2573 18.8635C62.9742 19.1427 62.7494 19.4753 62.596 19.842C62.4425 20.2088 62.3635 20.6024 62.3635 21C62.3635 21.3976 62.4425 21.7912 62.596 22.158C62.7494 22.5247 62.9742 22.8573 63.2573 23.1365C63.5405 23.4156 63.8762 23.6357 64.2451 23.7839C64.614 23.9322 65.0087 24.0056 65.4062 24H79.8125C80.6081 23.9999 81.3711 23.6838 81.9337 23.1212C82.4963 22.5586 82.8124 21.7956 82.8125 21V6.59375C82.821 6.18925 82.7476 5.78722 82.5966 5.41183C82.4457 5.03644 82.2205 4.69545 81.9344 4.40936C81.6483 4.12327 81.3073 3.898 80.9319 3.7471C80.5565 3.5962 80.1545 3.52277 79.75 3.53125C79.356 3.53941 78.9675 3.62511 78.6067 3.78344C78.2458 3.94177 77.9197 4.16963 77.6469 4.45402C77.3741 4.73841 77.16 5.07375 77.0168 5.44089C76.8737 5.80803 76.8042 6.19977 76.8125 6.59375V12.875C68.6156 4.86282 57.3081 0 45 0ZM43.75 20.75C43.356 20.7582 42.9675 20.8439 42.6067 21.0022C42.2458 21.1605 41.9197 21.3884 41.6469 21.6728C41.3741 21.9572 41.16 22.2925 41.0168 22.6596C40.8737 23.0268 40.8042 23.4185 40.8125 23.8125V47.375C40.8116 47.7693 40.8883 48.16 41.0385 48.5246C41.1886 48.8892 41.4092 49.2207 41.6875 49.5L54.0938 61.9375C54.6573 62.5011 55.4217 62.8177 56.2188 62.8177C57.0158 62.8177 57.7802 62.5011 58.3438 61.9375C58.9073 61.3739 59.224 60.6095 59.224 59.8125C59.224 59.0155 58.9073 58.2511 58.3438 57.6875L46.8125 46.1875V23.8125C46.821 23.408 46.7476 23.006 46.5966 22.6306C46.4457 22.2552 46.2205 21.9142 45.9344 21.6281C45.6483 21.342 45.3073 21.1168 44.9319 20.9658C44.5565 20.8149 44.1545 20.7415 43.75 20.75Z"
		></path>
	  </svg>
	  <span class="appstle_tooltip_title">Subscription Details</span>
	  <div class="appstle_tooltip appstle_tooltip_hover">
		<div class="appstle_tooltip_content">
		  {{{toolTipDescription}}}
		</div>
		<div class="appstle_tooltip_appstle">
		  <a href="{{companyWebsite}}" class="appstle_link" target="_blank">
			{{companyName}}
		  </a>
		</div>
	  </div>
	</div>
{{/showStaticTooltip}}
    </div>{% endraw %}`,
        "bundle": {},
        "labels": "{\"appstle.subscription.wg.yearsFrequencyTextV2\":\"Years\",\"appstle.subscription.wg.weekFrequencyTextV2\":\"Week\",\"appstle.subscription.wg.oneTimePurchaseTextV2\":\"One Time Purchase\",\"appstle.subscription.wg.loyaltyPerkDescriptionTextV2\":\"{{#isDiscountTypeFreeProduct}}<div style='display: flex;'><div style='height: 60px; width: 60px;'><img src={{{featured_image}}}><\/img><\/div><div>After {{{billingCycleBlock}}} orders,<span style='color: #ffc000;font-weight: 700;';> get a FREE {{freeProductName}} <\/span><\/div><div>{{\/isDiscountTypeFreeProduct}}{{#isDiscountTypePercentage}}After <span class='appstle-loyalty-billing-cycle'><span class='appstle-loyalty-billing-cycle-count'>{{{billingCycleBlock}}}<\/span> order<\/span>, <span class='appstle-loyalty-discount'>get <span style='color: #ffc000;font-weight: 700;';>{{{discount}}}% OFF your entire order<\/span><\/span>.{{\/isDiscountTypePercentage}}{{#isDiscountTypeShipping}}After <span class='appstle-loyalty-billing-cycle'><span class='appstle-loyalty-billing-cycle-count'>{{{billingCycleBlock}}}<\/span> order<\/span>, <span class='appstle-loyalty-discount'>get <span style='color: #ffc000;font-weight: 700;';>shipping at {{{formatDiscountedPrice}}}<\/span><\/span>.{{\/isDiscountTypeShipping}}{{#isDiscountTypeFixed}}After <span class='appstle-loyalty-billing-cycle'><span class='appstle-loyalty-billing-cycle-count'>{{{billingCycleBlock}}}<\/span> order<\/span>, <span class='appstle-loyalty-discount'>get <span style='color: #ffc000;font-weight: 700;';>{{{formatDiscountedPrice}}} OFF your entire order<\/span><\/span>.{{\/isDiscountTypeFixed}}\",\"appstle.subscription.wg.unsubscribeFrequencyTextV2\":\"unsubscribe\",\"appstle.subscription.wg.weeksFrequencyTextV2\":\"Weeks\",\"appstle.subscription.wg.oneTimeFrequencyTextV2\":\"One Time\",\"appstle.subscription.wg.dayFrequencyTextV2\":\"day\",\"appstle.subscription.wg.allowFulfilmentCountViaPropertiesV2\":\"false\",\"appstle.subscription.wg.monthsFrequencyTextV2\":\"Months\",\"appstle.subscription.wg.deliveryEveryFrequencyTextV2\":\"Entrega cada\",\"appstle.subscription.wg.subscribeAndSaveInitalV2\":\"Suscribirse y Guardar\",\"appstle.subscription.wg.offFrequencyTextV2\":\"Off\",\"appstle.subscription.wg.yearFrequencyTextV2\":\"Year\",\"appstle.subscription.wg.daysFrequencyTextV2\":\"Days\",\"appstle.subscription.wg.subscribeAndSaveSuccessV2\":\"Suscr\u00EDbete con \u00E9xito\",\"appstle.subscription.wg.monthFrequencyTextV2\":\"Month\",\"appstle.subscription.wg.selectDeliverOptionV2\":\"seleccione la opci\u00F3n de entrega\"}",
        "css": {
            "appstle_subscription_widget": {
                "margin-top": "" ,
                "margin-bottom": "",
            },

            "appstle_subscription_wrapper": {
                "border-width": "0px",
                "border-color": "#ffffff",
            },

            "appstle_circle": {
                "border-color": "#f15d5d",
            },

            "appstle_dot": {
                "background-color": "#f15d5d",
            },

            "appstle_select": {
                "padding-top": "0px",
                "padding-bottom": "0px",
                "padding-left": "0px",
                "padding-right": "0px",
                "border-width": "",
                "border-style": "",
                "border-color": "",
                "border-radius": "10",
            },

            "tooltip_subscription_svg": {
                "fill": "",
            },

            "appstle_tooltip": {
                "color": "",
                "background-color": "",
            },

            "appstle_tooltip_border_top_color": {
                "border-top-color": "",
            },

            "appstle_subscription_final_price": {
                "color": "",
            },
            "appstle_widget_text_color": {
                "color": "",
            },
            "appstle_selected_background": {
                "background": "transparent",
            },
            "customCSS": "",
            "customerPortalCss": "",
            "priceSelector": "span.price-item.price-item--regular",
            "landingPagePriceSelector": "",
            "quickViewClickSelector": "",
            "badgeTop": "",
            "pricePlacement": "BEFORE"
        }
      };

    }

    function urlIsProductPage() {
    // return null != decodeURIComponent(window.location.pathname).match(/\/products\/(([a-zA-Z0-9]|[\-\.\_\~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[\ud83c\ud83d\ud83e][\ud000-\udfff]){1,})\/?/)
    return decodeURIComponent(window.location.pathname).includes('/products/');
    }
  }
)(window);

