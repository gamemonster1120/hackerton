function limitCheckboxSelection(questionId, limit) {
    var checkboxes = document.querySelectorAll('#' + questionId + ' input[type="checkbox"]');
    var checkedCount = 0;

    checkboxes.forEach(function(checkbox) {
        checkbox.addEventListener('change', function() {
            if (this.checked) {
                checkedCount++;
                if (checkedCount > limit) {
                    this.checked = false;
                    checkedCount--;
                }
            } else {
                checkedCount--;
            }
        });
    });
}