using Microsoft.EntityFrameworkCore.Migrations;

namespace ClassroomApp.Migrations
{
    public partial class AddedStudentToCohortFk : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "CohortId",
                table: "Students",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.CreateIndex(
                name: "IX_Students_CohortId",
                table: "Students",
                column: "CohortId");

            migrationBuilder.AddForeignKey(
                name: "FK_Students_Cohorts_CohortId",
                table: "Students",
                column: "CohortId",
                principalTable: "Cohorts",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Students_Cohorts_CohortId",
                table: "Students");

            migrationBuilder.DropIndex(
                name: "IX_Students_CohortId",
                table: "Students");

            migrationBuilder.DropColumn(
                name: "CohortId",
                table: "Students");
        }
    }
}
