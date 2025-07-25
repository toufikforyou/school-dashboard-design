$(document).ready(function(){
	var image = document.getElementById('preview-img');
	var cropper;

        // Student.php file modal crop data javascript start code //
	$('#student-img').on('change', function(event){
		var files = event.target.files;
		var done = function(url){
			image.src = url;
			$('#profile-modal').modal('show');
		};
		if(files && files.length > 0)
		{
			reader = new FileReader();
			reader.onload = function(event)
			{
				done(reader.result);
			};
			reader.readAsDataURL(files[0]);
		}
	});

	$('#profile-modal').on('shown.bs.modal', function() {
		cropper = new Cropper(image, {
			aspectRatio: 1,
			viewMode: 3,
			preview:'.prifile-area'
		});
	}).on('hidden.bs.modal', function(){
		cropper.destroy();
   		cropper = null;
	});

	$('#crop').click(function(){
		canvas = cropper.getCroppedCanvas({
			width:400,
			height:400
		});

		canvas.toBlob(function(blob){
			url = URL.createObjectURL(blob);
			var reader = new FileReader();
			reader.readAsDataURL(blob);
			reader.onloadend = function(){
				var studentImage = reader.result;
				$.ajax({
					url:'function/student-profile.php',
					method:'POST',
					data:{image:studentImage},
					success:function(data)
					{
						$modal.modal('hide');
						$('#student-img').attr('src', data);
					}
				});
			};
		});
	});
        // Student.php file modal crop data javascript end code //
        // online-student.php file modal crop data javascript start code //
    $('#online-student').on('change', function(event){
        var files = event.target.files;
        var done = function(url){
            image.src = url;
            $('#online-profile').modal('show');
        };
        if(files && files.length > 0)
        {
            reader = new FileReader();
            reader.onload = function(event)
            {
                done(reader.result);
            };
            reader.readAsDataURL(files[0]);
        }
    });

    $('#online-profile').on('shown.bs.modal', function() {
        cropper = new Cropper(image, {
            aspectRatio: 1,
            viewMode: 3,
            preview:'.prifile-area'
        });
    }).on('hidden.bs.modal', function(){
        cropper.destroy();
            cropper = null;
    });

    $('#crop').click(function(){
        canvas = cropper.getCroppedCanvas({
            width:400,
            height:400
        });

        canvas.toBlob(function(blob){
            url = URL.createObjectURL(blob);
            var reader = new FileReader();
            reader.readAsDataURL(blob);
            reader.onloadend = function(){
                var studentImage = reader.result;
                $.ajax({
                    url:'function/student-profile.php',
                    method:'POST',
                    data:{image:studentImage},
                    success:function(data)
                    {
                        $modal.modal('hide');
                        $('#online-student').attr('src', data);
                    }
                });
            };
        });
    });
        // online-student.php file modal crop data javascript end code //
        // teacher.php file modal crop data javascript start code //
    $('#teacherIMG').on('change', function(event){
        var files = event.target.files;
        var done = function(url){
            image.src = url;
            $('#teacher-img').modal('show');
        };
        if(files && files.length > 0)
        {
            reader = new FileReader();
            reader.onload = function(event)
            {
                done(reader.result);
            };
            reader.readAsDataURL(files[0]);
        }
    });

    $('#teacher-img').on('shown.bs.modal', function() {
        cropper = new Cropper(image, {
            aspectRatio: 1,
            viewMode: 3,
            preview:'.prifile-area'
        });
    }).on('hidden.bs.modal', function(){
        cropper.destroy();
            cropper = null;
    });

    $('#crop').click(function(){
        canvas = cropper.getCroppedCanvas({
            width:400,
            height:400
        });

        canvas.toBlob(function(blob){
            url = URL.createObjectURL(blob);
            var reader = new FileReader();
            reader.readAsDataURL(blob);
            reader.onloadend = function(){
                var studentImage = reader.result;
                $.ajax({
                    url:'function/student-profile.php',
                    method:'POST',
                    data:{image:studentImage},
                    success:function(data)
                    {
                        $modal.modal('hide');
                        $('#teacherIMG').attr('src', data);
                    }
                });
            };
        });
    });
});