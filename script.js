$(document).ready(function() {
  let deClick = false;
  let meClick = false;
  $("#me").click(function() {
    if(meClick == false) {
      $("#me").css("width", "85%");
      $("#me").css("padding", "1em");
      $("#me").css("padding-left", "1.75em");
      let html = `
      <div id="co">
        <h2>How Similar DNA is compared</h2>
        <ul>
          <li><p>First, you have to map the desired DNA sample. To do so, you must begin by processing your sample through a machine known as a DNA sequencer.</p></li>
          <li><p>After processing, the machine will split the desired sample into the four bases G (guanine), C (cytosine), A (adenine) and T (thymine). The sequencer will then output a string of text known as a "read." Ex: AGTCTCCGTCCTGCTAGGTGTCGAG</p></li>
          <li><p>If you wish to compare sequences, you must do this process twice, once for each sample. Real samples will be thousands of characters long.</p></li>
          <li><p>The final step in comparing the sequences in the comparison itself. You enter both strings of DNA into an algorithm, for exmaple BLAST, and it will spit out results pertaining to the similarties between the two entered DNA sequences.</p></li>
          <li><p>The program essentially just looks to see which strings of characters in the sequence are alike. The more similar sequences, the more similar the samples.</p></li>
        </ul>
      </div>
      `
      $("#me").append(html);
      meClick = true;
    }
    else {
      $("#me").css("width", "50%");
      $("#me").html("");
      $("#me").css("padding", "0");
      $("#me").css("padding-left", "0");
      meClick = false;
    }
  });
  
  $("#dewey").click(function() {
    if(deClick == false) {
      $("#dewey").css("width", "85%");
      $("#dewey").append(`<iframe src="https://docs.google.com/presentation/d/e/2PACX-1vQGS6CsgKmHpNZB7n7TqD2hdDVTKoCz9ljP_lPoXtjB_N0txhx_6XJnfq7RRyU9axR65bW0z7iqkhkt/embed?start=false&loop=false&delayms=3000" frameborder="0" width="100%" height="100%" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>`);
      $("#dewey").css("padding", "1em");
      deClick = true;
    } else {
      $("#dewey").css("width", "50%");
      $("#dewey").html("");
      $("#dewey").css("padding", "0");
      deClick = false;
    }
  });
});
