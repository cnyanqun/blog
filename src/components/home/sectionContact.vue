<template>
  <section id="mu-contact">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <div class="mu-contact-area">
            <div class="mu-contact-header">
              <h2 class="mu-heading-title">CONTACT ME</h2>
              <span class="mu-header-dot"></span>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                industry's standard dummy text ever
              </p>
            </div>

            <!-- Start Contact Content -->
            <div class="mu-contact-content">
              <div class="row">
                <div class="col-md-12">
                  <div class="mu-contact-top">
                    <div class="row">
                      <div class="col-sm-4">
                        <div class="mu-contact-top-single">
                          <div class="mu-icon">
                            <i class="fa fa-map-marker"></i>
                          </div>
                          <p>Dooley Branch Rd Millen, GA 30442, USA</p>
                        </div>
                      </div>
                      <div class="col-sm-4">
                        <div class="mu-contact-top-single">
                          <div class="mu-icon">
                            <i class="fa fa-phone"></i>
                          </div>
                          <p>+90 987 678 9834</p>
                          <p>+90 567 098 785</p>
                        </div>
                      </div>
                      <div class="col-sm-4">
                        <div class="mu-contact-top-single">
                          <div class="mu-icon">
                            <i class="fa fa-envelope"></i>
                          </div>
                          <p>contact@domain.com</p>
                          <p>support@domain.com</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="col-md-12">
                  <div class="mu-contact-bottom">
                    <div id="form-messages"></div>
                    <form
                      id="ajax-contact"
                      method="post"
                      action="mailer.php"
                      class="mu-contact-form"
                    >
                      <div class="form-group">
                        <input
                          type="text"
                          class="form-control"
                          placeholder="Name"
                          id="name"
                          name="name"
                          required
                        />
                      </div>
                      <div class="form-group">
                        <input
                          type="email"
                          class="form-control"
                          placeholder="Enter Email"
                          id="email"
                          name="email"
                          required
                        />
                      </div>
                      <div class="form-group">
                        <textarea
                          class="form-control"
                          placeholder="Message"
                          id="message"
                          name="message"
                          required
                        ></textarea>
                      </div>
                      <button type="submit" class="mu-send-msg-btn">
                        <span>SUBMIT</span>
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            <!-- End Contact Content -->
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {}
};
</script>
<style lang="scss" scoped type="text/css">
</style>
