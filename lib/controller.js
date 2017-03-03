angular.module('controller',[])
.controller('PatientCtrl',['$scope', '$http', function ($scope, $http)
{

			  $scope.frmToggle = function() {
        $('#PatientForm').slideToggle();
    

}	
		
$http.get('./js/popData.php')
		.success(function(data) {
		    $scope.patients = data;
		})
		.error(function(err) {
		    $log.error(err);
		})

    $scope.pushData = function($params) {
        $http.post('./js/pushData.php',{'fname':$params.fname, 'lname':$params.lname, 'age':$params.age, 'gender':$params.gender, 'phone':$params.phone, 'message':$params.dob, 'dob':$params.message})
			.success(function(data) {
			    $scope.patients = data;
			})
			.error(function(err) {
			    $log.error(err);
			})
}

    $scope.removeData = function ($params) {
        var cnfrm = confirm("Are you sure to delete?");
        if (cnfrm) {
            $http.post('./js/removeData.php', { 'id': $params })
            .success(function (data) {
                $scope.patients = data;
            })
            .error(function (err) {
                $log.error(err);
            })
        } else {
            // 
        }

    }])





		



