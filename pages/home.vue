<template>
  <v-container fluid class="pa-0">
    <v-row class="ma-0" max-height="100vh">
      <v-col class="pa-0" lg="3" md="4" sm="6" xs="12">
        <v-card data-aos="fade-right" data-aos-duration="800" height="100%">
          <v-img height="100%" src="/img/cosmetics/img_side.jpg">
            <v-row class=" white--text" style="margin-top:25% !important">
              <v-col>
                <div class="mx-auto" style="width:50% !important">
                  <div class="display-2 font-italic">ĐÂY !!!</div>
                  <div class="body-1 font-weight-thin	">Là loại mỹ phẩm</div>
                  <div class="caption font-italic font-weight-light">
                    Mà quăn đíu biết tên
                  </div>
                </div>
              </v-col>
            </v-row>
          </v-img>
        </v-card>
      </v-col>
      <v-col height="80%" class="pa-0" lg="9" md="8" sm="6" xs="12">
        <v-row class="pa-0 ma-0" max-height="50vh">
          <v-col class="pa-0" lg="8" md="8" sm="12" xs="12">
            <v-card
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay="100"
              height="100%"
            >
              <v-img height="100%" src="/img/cosmetics/img_wide1.jpg">
                <v-row
                  class=" white--text"
                  style="margin:5% 0 0 25% !important"
                >
                  <v-col>
                    <div class="mx-auto" style="width:50% !important">
                      <div class="body-1 font-weight-thin	">
                        Cái này quăn cũng hăm bít
                      </div>
                      <div class="caption font-italic font-weight-light">
                        nhưng chắc là kẻ mắt
                      </div>
                    </div>
                  </v-col>
                </v-row>
              </v-img>
            </v-card>
          </v-col>
          <v-col class="pa-0" lg="4" md="4" sm="12" xs="12">
            <v-card
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay="200"
              height="100%"
            >
              <v-img height="100%" src="/img/cosmetics/img_sqrt1.jpg"> </v-img>
            </v-card>
          </v-col>
        </v-row>
        <v-row class="pa-0 ma-0" max-height="50vh">
          <v-col class="pa-0" lg="4" md="4" sm="12" xs="12">
            <v-card data-aos="fade-up" data-aos-delay="50" height="100%">
              <v-img height="100%" src="/img/cosmetics/img_sqrt2.jpg"> </v-img>
            </v-card>
          </v-col>
          <v-col class="pa-0" lg="8" md="8" sm="12" xs="12">
            <v-card data-aos="fade-up" data-aos-delay="150" height="100%">
              <v-img height="100%" src="/img/cosmetics/img_wide2.jpg"> </v-img>
            </v-card>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
export default {
  layout: 'landing-page'
}
</script>
